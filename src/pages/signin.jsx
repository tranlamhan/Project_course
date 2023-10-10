import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'
import { PATH } from '../config/PATH'
import { useAsync } from '../hooks/useAsync'
import { useForm } from '../hooks/useForm'
import { useScrollTop } from '../hooks/useScrollTop'
import { minMax, regexp, required } from '../utils/validate'

export default function Signin() {
    useScrollTop()
    const { user, login } = useAuth()
    const { execute: loginService, loading } = useAsync(login)
    const rules = {
        username: [
            required(),
            regexp('email')
        ],
        password: [
            required(),
            minMax(6)
        ]
    }
    const form = useForm(rules)
    const onLogin = (ev) => {
        ev.preventDefault()
        if (form.validate()) {
            loginService(form.values)
        }
    }
    if (user) return <Navigate to={PATH.index} />
    return (
        <main className="auth" id="main">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login">
                    <h2 className="title">Đăng nhập</h2>
                    <Input placeholder="Email / Số điện thoại" {...form.register('username')}></Input>
                    <Input type="password" placeholder="Mật khẩu" {...form.register('password')}></Input>
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <Button onClick={onLogin} className="btn rect main btn-login" Loading={loading}>đăng nhập</Button>
                    <div className="text-register" style={{}}>
                        <span>Nếu bạn chưa có tài khoản?</span> <a className="link" href="#">Đăng ký</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
