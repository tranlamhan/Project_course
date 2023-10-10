import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { PATH } from '../../config/PATH'
import Skeleton from '../Skeleton'

export default function CourseCard({ id, short_description, slug, title, thumbnailUrl }) {
    const path = generatePath(PATH.course_detail, { slug, id })
    const registerPath = generatePath(PATH.register, { slug, id })

    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>{title}</Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={thumbnailUrl} alt="" />
                        </div>
                        <div className="name">Vương Đặng</div>
                    </div>
                    {/* <a href="/register.html" className="register-btn">Đăng Ký</a> */}
                    <Link className="register-btn" to={registerPath}>Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}

export const CourseCardLoading = () => {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to="#">
                    {/* <img src={thumbnailUrl} alt="" /> */}
                    <Skeleton height={310} />
                </Link>
                <div className="info">
                    <Link className="name" to="#"><Skeleton height={29} /></Link>
                    <div className="des"><Skeleton height={80} /></div>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            {/* <img src={thumbnailUrl} alt="" /> */}
                            <Skeleton shape='circle' height={36} width={36} />
                        </div>
                        <div className="name"><Skeleton height={24} width={150} /></div>
                    </div>
                    <a href="/register.html" className="register-btn"><Skeleton width={66} height={24} /></a>
                </div>
            </div>
        </div>
    )
}