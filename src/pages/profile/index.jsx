import { useAsync } from '@/hooks/useAsync'
import { useForm } from '@/hooks/useForm'
import { userService } from '@/services/user.service'
import React from 'react'
import { useScrollTop } from '../../hooks/useScrollTop'
import { required , regexp} from '@/utils/validate'
import Field from '@/components/Field'
import { useAuth } from '@/components/AuthContext'
import Button from '@/components/Button'
import { message } from 'antd'
import { handleError } from '@/utils/handleError'

export default function Profile() {
  useScrollTop()
  const { loading, execute: updateInfoService} = useAsync(userService.updateInfo)
  const rules = {
    name: [
      required()
    ],
    phone: [
      required(),
      regexp('phone')
    ],
    fb: [
      required(),
      regexp('facebook')
    ]
  }
  const { register, values, validate} = useForm(rules)
  const { user, setUser } = useAuth()
  const onSubmit = async () => {
    try {
      if (validate()) {
        const res = await updateInfoService(values)
        setUser(res.data)
        message.success('Update information successfully')
      }
    } catch (error) {
      handleError(error)
    }
  }
  return (
    <div className="tab1">
      <Field {...register('name')} customField={{"marginBottom": "30px"}} placeholder="Nguyễn Văn A" label='Họ và tên'/>
      <Field {...register('phone')} customField={{"marginBottom": "30px"}} placeholder="0949******" label='Số điện thoại' />
      <Field {...register('email')} customField={{"marginBottom": "30px"}} label='Email' placeholder={user.username} disabled />
      <Field {...register('fb')} customField={{"marginBottom": "30px"}} placeholder="Facebook url" label='Facebook'/>

      <Button onClick={onSubmit} Loading={loading} >LƯU LẠI</Button>
    </div>
  )
}
