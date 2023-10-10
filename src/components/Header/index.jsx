import React from 'react'
import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import './style.css'
import { PATH } from '../../config/PATH'
import { useAuth } from '../AuthContext';
import { avatarDefault } from '../../config'

function Header() {
    const { pathname } = useLocation()

    const { user, logout } = useAuth()

    useEffect(() => {
        return () => {
            onCloseMenu()
        }
    }, [pathname])

    const onCloseMenu = () => {
        document.body.classList.remove('menu-is-show')
    }

    const _logout = (ev) => {
        ev.preventDefault()
        logout()
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" >
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <NavLink to={PATH.index} className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>Spacedev</h1>
                    </NavLink>
                    <div className="right">
                        {
                            user ? (
                                <div className="have-login">
                                    <div className="account">
                                        <Link to={PATH.profile.index} className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src={user.avatar ? user.avatar : avatarDefault} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                                        <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                                        <a onClick={_logout} href='#' >Đăng xuất</a>
                                    </div>
                                </div>
                            ) : (
                                <div className="not-login bg-none">
                                    <Link to={PATH.signin} className="btn-register" >Đăng nhập</Link>
                                    <Link to={PATH.signup} className="btn main btn-open-login">Đăng ký</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to={PATH.signin}>Đăng ký / Đăng nhập</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.index}>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.team}>Spacedev Team</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.course}>Khóa Học</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.project}>Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.contact}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}

export default Header