import React, { useState } from 'react'
import { Accordion2, Accordion } from '../components/Accordion'
import { useScrollTop } from '../hooks/useScrollTop'

export default function Faq() {
    useScrollTop()

    return (
        <main className="faqpage" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">Câu hỏi thường gặp</h2>
                    <div className="row">
                        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                            <h3 className="accordion__title-main">Thông tin chung</h3>
                            <Accordion.group>
                                <Accordion title={'Spacedev là gì?'} key={0} >
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                                <Accordion title={'Thành viên sáng lập Spacedev gồm những ai?'} key={1}>
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                                <Accordion title={'Đăng ký khóa học như thế nào?'} key={2} >
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                            </Accordion.group>
                        </div>
                        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                            <h3 className="accordion__title-main">Đăng ký, thanh toán và điểm thưởng</h3>
                            <Accordion.group>
                                <Accordion title={'Spacedev là gì?'} key={3}>
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                                <Accordion title={'Thành viên sáng lập Spacedev gồm những ai?'} key={4}>
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                                <Accordion title={'Đăng ký khóa học như thế nào?'} key={5}>
                                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                    offers
                                    some tangible benefits over alternatives like VueJS for simple page interactions.
                                </Accordion>
                            </Accordion.group>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
