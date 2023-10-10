import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { courseService } from '../../services/course.service'
import CourseCard, { CourseCardLoading } from '../CourseCard'
import Skeleton from '../Skeleton'

export default function ListCourse({ limit }) {

    if (limit) {
        var { data: courses, loading } = useFetch(() => {
            return courseService.getCourses(`?limit=${limit}`)
        })
    } else {
        var { data: courses, loading } = useFetch(courseService.getCourses)
    }

    if (!loading) {
        console.log(courses);
    }

    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
                <p className="top-des">
                    Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt động kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy chọn lộ trình học tập mà bạn muốn và bắt đầu câu chuyện thành công của bạn.
                </p>
                <div className="textbox" style={{ marginTop: '100px' }}>
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">OFFLINE</h2>
                </div>
                <div className="list row">
                    {
                        loading ? Array.from(Array(6)).map((_, i) => <CourseCardLoading key={i} />) :
                            courses.data.map((ele) => <CourseCard key={ele.id} {...ele} />)
                    }
                </div>
            </div>
        </section>
    )
}
