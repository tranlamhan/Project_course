import React from 'react'
import { useState } from 'react'
import Field from '../components/Field'
import { useFetch } from '../hooks/useFetch'
import { useForm } from '../hooks/useForm'
import { useScrollTop } from '../hooks/useScrollTop'
import { required, regexp, reEnter, minMax } from '../utils/validate'
import { userService } from '../services/user.service'
import { useAsync } from '../hooks/useAsync'
import Button from '../components/Button'
import { message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Input from '../components/Input'
import classNames from 'classnames'

export default function Signup() {
    useScrollTop()

    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)

    let rules = {
        username: [
            required(),
            regexp('email', 'Please input right format of email')
        ],
        name: [
            required(),
        ],
        password: [
            required(),
            minMax(6, 21)
        ],
        rePassword: [
            required(),
            reEnter('password', 'Incorrect password')
        ]
    }
    const { loading, execute: signUpService } = useAsync(userService.signup)

    const {loading: resendEmailLoading, execute: resendEmailService} = useAsync(userService.resendEmail)

    const { register, validate, values } = useForm(rules)

    const onSubmit = async (ev) => {
        ev.preventDefault()
        if (validate()) {
            try {
                await signUpService(values)
                    setIsSignUpSuccess(true)
                    message.success('Register successfully')
            } catch (err) {
                if (err.response?.data?.message) {
                    message.error(err.response.data.message)
                }
                setIsSignUpSuccess(false)
            }
            finally {
                // console.log(values);
            }
        }
    }

    const resendEmail = async (ev) => {
        ev.preventDefault();
        try {
            await resendEmailService({username: values.username})
            message.success(res.message)
        } catch (error) {
            if (error.response?.data?.message) {
                message.error(error.response.data.message)
            }
        }

    }

    return (
        isSignUpSuccess ? (
            <div className="mt-20 py-10">
                <div className="contain py-10">
                    <div className="main-title">đăng ký thành công</div>
                    <p className='text-center'>
                        <strong>Chào mừng  đã trở thành thành viên mới của Spacedev Team.</strong>
                    </p>
                    <p className='text-center my-3' >Vui lòng kiểm tra email để kích hoạt. Nếu bạn không nhận được email, vui lòng bấm </p>
                    {/* <Button Loading={resendEmailLoading} onClick={resendEmail}>"Gửi lại email để kích hoạt"</Button> */}
                    <div className="flex">
                        <a onClick={resendEmail} href="#" className={classNames('link flex gap-2 mx-auto',{'opacity-40 pointer-events-none': resendEmailLoading})}>
                            {resendEmailLoading && <LoadingOutlined/>}
                            Gửi lại Email để kích hoạt
                        </a>
                    </div>
                </div>
                <a href="/" className="btn main rect mx-auto block box-border max-w-max">về trang chủ</a>
            </div>
        ) :
            (<main className="auth signupPage" id="main">
                <div className="wrap form">
                    <h2 className="title">Đăng ký</h2>
                    <Input {...register('username')} placeholder="Địa chỉ Email"  ></Input>
                    <Input {...register('name')} placeholder="Họ và tên"  ></Input>
                    <Input {...register('password')} placeholder="Mật khẩu" type='password'  ></Input>
                    <Input {...register('rePassword')} placeholder="Nhập lại mật khẩu" type='password'  ></Input>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của Spacedev
                    </p>
                    <Button onClick={onSubmit} Loading={loading} className="btn rect main btn-login">Đăng ký</Button>
                </div>
            </main>)
    )
}
