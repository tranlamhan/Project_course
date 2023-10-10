import { useForm } from '@/hooks/useForm'
import React from 'react'
import { useScrollTop } from '../hooks/useScrollTop'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAsync } from '@/hooks/useAsync'
import { userService } from '@/services/user.service'
import { reEnter, regexp, required } from '@/utils/validate'
import { useSearchParams } from 'react-router-dom'
import { message } from 'antd'
import { setToken } from '@/utils/token'
import { useAuth } from '@/components/AuthContext'
import { useState } from 'react'

export default function ResetPassword() {
    useScrollTop()
    const [isSuccess, setIsSuccess] = useState(false)
    const { getProfile } = useAuth()
    const [search] = useSearchParams()
    const codeFromURL = search.get('code')
    const { loading: sendEmailLoading, execute: sendEmailResetPassword } = useAsync(userService.sendEmailResetPassword)
    const { loading: resetPasswordLoading, execute: resetPasswordByCode } = useAsync(userService.resetPasswordByCode)
    const sendEmailForm = useForm({
        email: [
            required(),
            regexp('email')
        ],
    })
    const resetPasswordForm = useForm({
        password: [
            required(),
        ],
        confirmPassword: [
            required(),
            reEnter('password')
        ]
    })

    const sendEmailSubmit = async () => {
        if (sendEmailForm.validate()) {
            const res = await sendEmailResetPassword({
                username: sendEmailForm.values.email
            })
            setIsSuccess(true)
            message.success(res.message)
        }
    }

    const resetPasswordSubmit = async () => {
        if (resetPasswordForm.validate()) {
            console.log('send api');
            const res = await resetPasswordByCode({
                password: resetPasswordForm.values.password,
                code: codeFromURL
            })
            setToken(res.data)
            getProfile()
        }
    }

    return (

        <main className="auth" id="main">
            {
                codeFromURL ? (
                    <div className="wrap">
                        <h2 className="title">Xác nhận mật khẩu</h2>
                        {/* <Input {...resetPasswordForm.register('code')} placeholder="Code" /> */}
                        <Input {...resetPasswordForm.register('password')} type='password' placeholder="Mật khẩu" />
                        <Input {...resetPasswordForm.register('confirmPassword')} type='password' placeholder="Nhập lại mật khẩu" />
                        <p style={{ marginBottom: '15px' }}>Nếu chưa nhận được email nào, vui lòng bấm nút <a className="link" href="#">Gửi lại</a> trong 20 giây</p>
                        <Button Loading={resetPasswordLoading} onClick={resetPasswordSubmit}>Xác nhận</Button>
                    </div>
                ) : (
                    isSuccess ? (
                        <div className='flex flex-col items-center justify-center my-10 max-w-2xl m-auto'>
                            <h1 className='text-2xl my-5 font-bold'>Gửi mail lấy lại mật khẩu thành công</h1>
                            <p>Chúng tôi đã gửi cho bạn email lấy lại mật khẩu, xin vui lòng kiểm tra email</p>
                        </div>
                    ) : (
                        <div className="wrap">
                            <h2 className="title">Đặt lại mật khẩu</h2>
                            <Input {...sendEmailForm.register('email')} placeholder="Email" />
                            <Button Loading={sendEmailLoading} onClick={sendEmailSubmit}>Tiếp theo</Button>
                        </div>
                    )
                )
            }
        </main>
    )
}
