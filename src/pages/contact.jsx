import React, { useEffect, useRef, useState } from 'react'
import Field from '../components/Field';
import { useForm } from '../hooks/useForm';
import { useScrollTop } from '../hooks/useScrollTop';
import { organizationService } from '../services/organization.service';
import { message } from 'antd';
import Button from '../components/Button';
import { required, regexp } from '../utils/validate';
import { useAsync } from '../hooks/useAsync'

export default function Contact() {
    useScrollTop()

    const [isSuccess, setIsSuccess] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.setValue('0847827897')
    },[])
    const { execute , loading} = useAsync(organizationService.contact)

    let rules = {
        name: [
            // { require: true, message: "Họ và tên không được để trống" },
            required('Ho va ten khong duoc de trong')
        ],
        phone: [
            required(),
            { regex: 'phone', message: "Sai định dạng sđt" }
        ],
        email: [
            { require: true, message: "Mail không được để trống" },
            { regex: 'email', message: "Sai định dạng mail" }
        ],
        website: [
            { regex: 'website', message: "Sai định dạng website" }
        ],
        title: [
            { require: true, message: "Tiêu đề không được để trống" }
        ],
        content: [
            { require: true, message: "Nội dung không được để trống" }
        ],
    }

    const { register, validate, values, resetValue } = useForm(rules)
    
    const onSubmit = async (ev) => {
        console.log('submit');
        console.log(values);
        ev.preventDefault();
        try {
            if (validate()) {
                let res = await execute(values)
                if (res.success) {
                    setIsSuccess(true)
                    resetValue()
                    message.success('Register successfully !!!')
                }
            }
        } catch (error) {
            console.log('catch error')
        }
        finally{
            // console.log(values);
        }
    }

    return (
        isSuccess ? (
            <>
                <h2 className="main-title mt-32">LIÊN HỆ THÀNH CÔNG</h2>
                <p className="top-des">
                    Thông tin liên hệ của bạn đã được gửi, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất. Xin cám ơn !!!
                </p>
                <div className='flex justify-center mb-32'>
                    <a className='mt-8 cursor-pointer text-blue-500' onClick={(ev) => {
                        ev.preventDefault();
                        setIsSuccess(false)
                    }}>Tiếp tục liên hệ</a>
                </div>
            </>

        ) : (
            <>
                <main className="register-course" id="main">
                    <section className="section-1 wrap container">
                        {/* <div class="main-sub-title">liên hệ</div> */}
                        <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
                        <p className="top-des">
                            Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                        </p>
                        <div  className="form" >
                            <Field
                                label="Họ và tên"
                                placeholder="Họ và tên bạn"
                                require
                                {...register("name")}
                            />
                            <Field
                                label="Số điện thoại"
                                placeholder="Số điện thoại bạn"
                                require
                                ref={inputRef}
                                {...register("phone")}
                            />
                            <Field
                                label="Email"
                                placeholder="Email bạn"
                                require
                                {...register("email")}
                            />
                            <Field
                                label="Website"
                                placeholder="Đường dẫn website http://"
                                {...register("website")}
                            />
                            <Field
                                label="Tiêu đề"
                                placeholder="Tiêu đề liên hệ"
                                require
                                {...register("title")}
                            />
                            <Field
                                label="Nội dung"
                                placeholder="Nội dung"
                                require
                                {...register("content")}
                                renderInput={(error, props) => (<textarea style={error ? { border: "1px solid red" } : undefined} {...props} cols={30} rows={10} />)}
                            />
                            <Button onClick={onSubmit} Loading={loading}>đăng ký</Button>
                        </div>
                    </section>
                </main>
            </>
        )
    )
}
