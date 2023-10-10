import AuthRouter from "../components/AuthRouter"
import PrivateRouter from "../components/PrivateRouter"
import { PATH } from "../config/PATH"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages"
import Page404 from "../pages/404"
import Coin from "../pages/coin"
import Contact from "../pages/contact"
import Course from "../pages/course"
import CourseDetail from "../pages/course/[slug]-id[id]"
import Faq from "../pages/faq"
import Payment from "../pages/payment"
import Project from "../pages/project"
import Register from "../pages/register/[slug]-id[id]"
import ResetPassword from "../pages/reset-password"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Team from "../pages/team"
import { profileRoutes } from "./profile"

export const routes = [
    {
        element: <MainLayout />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                element: <Contact />,
                path: PATH.contact
            },
            {
                path: PATH.course,
                children: [
                    {
                        element: <Course />,
                        index: true,
                    },
                    {
                        element: <CourseDetail />,
                        path: PATH.course_detail
                    }
                ]
            },
            {
                element: <Team />,
                path: PATH.team
            },
            {
                element: <Project />,
                path: PATH.project
            },
            {
                element: <Faq />,
                path: PATH.faq
            },
            {
                element: <Payment />,
                path: PATH.payment
            },
            {
                element: <Coin />,
                path: PATH.coin
            },
            {
                element: <AuthRouter redirect={PATH.profile.index} />,
                children: [
                    {
                        element: <Signin />,
                        path: PATH.signin
                    },
                    {
                        element: <Signup />,
                        path: PATH.signup
                    },
                    {
                        element: <ResetPassword />,
                        path: PATH.resetPassword
                    }
                ]
            },
            profileRoutes(),
            {
                element: <Register />,
                path: PATH.register
            },
            {
                element: <Page404 />,
                path: PATH.Page404
            }
        ]
    },
]