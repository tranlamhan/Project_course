import React, { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { routes } from './routes/index'
import './assets/css/tailwind.css'
import './assets/css/custom.css'

function App() {

  const element = useRoutes(routes)
  return (
    // <>
    //   <Routes>
    //     <Route path={PATH.index} element={<MainLayout user={user} login={login} logout={logout} />}>

    //       <Route index element={<Home />} />
    //       <Route path={PATH.contact} element={<Contact />} />

    //       <Route path={PATH.course}>
    //         <Route index element={<Course />} />
    //         <Route path={PATH.course_detail} element={<CourseDetail />} />
    //       </Route>

    //       <Route path={PATH.team} element={<Team />} />
    //       <Route path={PATH.project} element={<Project />} />
    //       <Route path={PATH.faq} element={<Faq />} />
    //       <Route path={PATH.payment} element={<Payment />} />
    //       <Route path={PATH.coin} element={<Coin />} />

    //       <Route element={<AuthRouter user={user} redirect={PATH.profile.index} />}>
    //         <Route path={PATH.signin} element={<Signin login={login} />} />
    //         <Route path={PATH.signup} element={<Signup />} />
    //         <Route path={PATH.resetPassword} element={<ResetPassword />} />
    //       </Route>

    //       <Route element={<PrivateRouter user={user} redirect={PATH.signin} />}>
    //         <Route path={PATH.profile.index} element={<ProfileLayout />}>
    //           <Route index element={<Profile />} />
    //           <Route path={PATH.profile.course} element={<MyCourse />} />
    //           <Route path={PATH.profile.project} element={<MyProject />} />
    //           <Route path={PATH.profile.payment} element={<MyPayment />} />
    //           <Route path={PATH.profile.coin} element={<MyCoin />} />
    //         </Route>
    //       </Route>

    //       <Route path={PATH.register} element={<Register />} />
    //       <Route path={PATH.Page404} element={<Page404 />} />
    //     </Route>
    //     <Route path='/todolist' element={<ToDoList listJob={listJob} onAdd={onAdd} clearTask={clearTask} changeStatus={changeStatus} removeItem={removeItem} />} />
    //   </Routes>
    // </>

    element

  )
}

export default App
