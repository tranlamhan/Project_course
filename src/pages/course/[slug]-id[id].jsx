import React, { useEffect, useState } from 'react'
import { generatePath, Link, useParams } from 'react-router-dom'
import moment from 'moment';

import { PATH } from '../../config/PATH';
import { currency } from '../../utils/currency';
import { courseService } from '../../services/course.service';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useFetch } from '../../hooks/useFetch';

import Skeleton from '../../components/Skeleton'
import CourseCard, { CourseCardLoading } from '../../components/CourseCard';
import { Accordion } from '../../components/Accordion'
import { Teacher } from '@/components/Teacher'
import { Modal } from '@/components/Modal';
import Page404 from '../404';

export default function CourseDetail() {
    const { id, slug } = useParams()

    const [openVideoModal, setOpenVideoModal] = useState(false)

    const registerPath = generatePath(PATH.register, { slug, id })

    const { data: detail, loading } = useFetch(() => {
        return courseService.getCourseWithID(id)
    }, [id])

    const { data: related, loading: loadingRelated } = useFetch(() => {
        return courseService.getRelated(id);
    }, [id])

    useScrollTop([id])

    var openingTime = ""

    if (!loading) {
        openingTime = moment(detail.data.opening_time).format('DD/MM/YYYY')
    }

    return (
        loading ?
            <main className="course-detail" id="main">
                <section className="banner style2" style={{ '--background': '#cde6fb' }}>
                    <div className="container">
                        <div className="info">
                            <h1><Skeleton width={345} height={64} /></h1>
                            <div className="row">
                                <div className="date"><strong>Khai giảng:</strong> <Skeleton width={180} height={45} /></div>
                                <div className="time"><strong>Thời lượng:</strong> <Skeleton width={120} height={45} /></div>
                            </div>
                            <Link className="btn white round" style={{ '--colorBtn': '#70b6f1' }} to={registerPath}>đăng ký</Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="video">
                                <div className="icon">
                                    <img src="/img/play-icon-white.png" alt="" />
                                </div> <span>giới thiệu</span>
                            </div>
                            <div className="money"><Skeleton width={125} height={27} /></div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="container">
                        <div className="des"><Skeleton width={760} height={300} /></div>
                        <h2 className="title">giới thiệu về khóa học</h2>
                        <div className="cover">
                            <img src="/img/course-detail-img.png" alt="" />
                        </div>
                        <h3 className="title">nội dung khóa học</h3>
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <Skeleton className='mb-5' width={'100%'} height={64} />
                        <h3 className="title">yêu cầu cần có</h3>
                        <div className="row row-check">
                            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                            <div className="col-md-6">Cài đặt phần mềm Photoshop,
                                Adobe illustrator, Skype</div>
                        </div>
                        <h3 className="title">hình thức học</h3>
                        <div className="row row-check">
                            <div className="col-md-6">Học offline tại văn phòng, cùng Vương Đặng và 3 đồng nghiệp.</div>
                            <div className="col-md-6">Dạy và thực hành thêm bài tập online
                                thông qua Skype.</div>
                            <div className="col-md-6">Được các mentor và các bạn trong team Spacedev hổ trợ thông qua group Spacedev Facebook
                                hoặc phần mềm điều khiển máy tính.</div>
                            <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của Spacedev Team.</div>
                        </div>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
                        </p>
                        <h3 className="title">Người dạy</h3>
                        <div className="teaches">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="/img/avt.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">Đặng Thuyền Vương</div>
                                    <div className="title">Founder Spacedev &amp; Fullstack developer</div>
                                    <p className="intro">
                                        My education, career, and even personal life have been molded by one simple principle;
                                        well
                                        designed information resonates with people and can change lives.I have a passion for
                                        making
                                        information resonate. It all starts with how people think. With how humans work. As
                                        humans
                                        we have learned how to read and write and while that is incredible, we are also already
                                        hard-wired to do some things a bit more "automatically"
                                    </p>
                                    <p><strong>Website:</strong> <a href="#">https://dangthuyenvuong.github.io/</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="user">
                                <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                            </div>
                            <div className="btn main btn-register round">đăng ký</div>
                            <div className="btn-share btn overlay round btn-icon">
                                <img src="/img/facebook.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main> :
            detail.data == null ?
                <Page404 /> :
                <main className="course-detail" id="main">
                    <section className="banner style2" style={{ '--background': detail.data.template_color_banner || '#cde6fb' }}>
                        <div className="container">
                            <div className="info">
                                <h1>{detail.data.title}</h1>
                                <div className="row">
                                    <div className="date"><strong>Khai giảng:</strong> {openingTime}</div>
                                    <div className="time"><strong>Thời lượng:</strong> {detail.data.count_video} buổi</div>
                                </div>
                                <Link className="btn white round" style={{ '--color-btn': detail.data.template_color_btn || '#70b6f1' }} to={registerPath}>đăng ký</Link>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="container">
                                <div className="video" onClick={() => setOpenVideoModal(true)}>
                                    <div className="icon">
                                        <img src="/img/play-icon-white.png" alt="" />
                                    </div> <span>giới thiệu</span>
                                </div>
                                <Modal maskCloseable visible={openVideoModal} onCancel={() => setOpenVideoModal(false)}>
                                    <iframe width="800" height="450" src="https://www.youtube.com/embed/FfAAEJvYIvc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </Modal>
                                <div className="money">{currency(detail.data.money)} VND</div>
                            </div>
                        </div>
                    </section>
                    <section className="section-2">
                        <div className="container">
                            <p className="des">{detail.data.long_description}</p>
                            <h2 className="title">giới thiệu về khóa học</h2>
                            <div className="cover">
                                <img src="/img/course-detail-img.png" alt="" />
                            </div>
                            <h3 className="title">nội dung khóa học</h3>
                            <Accordion.group>
                                {
                                    detail.data.content.map((e, i) => <Accordion key={i} title={e.title} date={i + 1}>{e.content}</Accordion>)
                                }
                            </Accordion.group>
                            <h3 className="title">yêu cầu cần có</h3>
                            <div className="row row-check">
                                {
                                    detail.data.required.map((ele, ind) => <div className="col-md-6" key={ind}>{ele.content}</div>)
                                }
                            </div>
                            <h3 className="title">hình thức học</h3>
                            <div className="row row-check">
                                {
                                    detail.data.benefits.map((ele, ind) => <div className="col-md-6" key={ind}>{ele.content}</div>)
                                }
                            </div>
                            <h3 className="title">
                                <div className="date-start">lịch học</div>
                                <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                            </h3>
                            <p>
                                <strong>Ngày bắt đầu: </strong> {openingTime} <br />
                                <strong>Thời gian học: </strong> {detail.data.schedule}
                            </p>
                            <h3 className="title">Người dạy</h3>
                            <div className="teaches">
                                <Teacher key={detail.data.teacher._id} {...detail.data.teacher} />
                            </div>
                            {
                                detail.data.mentor.length > 0 && (
                                    <>
                                        <h3 className="title">Người hướng dẫn</h3>
                                        <div className="teaches">
                                            {
                                                detail.data.mentor.map((e) => <Teacher key={e._id} {...e} />)
                                            }
                                        </div>
                                    </>
                                )
                            }

                            <div className="bottom">
                                <div className="user">
                                    <img src="/img/user-group-icon.png" alt="" /> {detail.data.number_student_default} bạn đã đăng ký
                                </div>
                                <Link className="btn main btn-register round" to={registerPath}>đăng ký</Link>
                                <div className="btn-share btn overlay round btn-icon">
                                    <img src="/img/facebook.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-4">
                        <div className="container">
                            <div className="textbox">
                                <h3 className="sub-title">Khóa học</h3>
                                <h2 className="main-title">Liên quan</h2>
                            </div>
                            <div className="list row">
                                {
                                    loadingRelated ? Array.from(Array(3)).map((_, i) => <CourseCardLoading key={i} />) :
                                        related.data.map((ele) => <CourseCard key={ele.id} {...ele} />)
                                }

                            </div>
                        </div>
                    </section>
                </main>

    )
}
