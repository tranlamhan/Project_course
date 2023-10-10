import { useAuth } from "../components/AuthContext"
import PrivateRouter from "../components/PrivateRouter"
import { PATH } from "../config/PATH"
import ProfileLayout from "../layouts/ProfileLayout"
import Profile from "../pages/profile"
import MyCoin from "../pages/profile/coin"
import MyCourse from "../pages/profile/course"
import MyPayment from "../pages/profile/payment"
import MyProject from "../pages/profile/project"

export const profileRoutes = () => {

    return (
        {
            element: <PrivateRouter redirect={PATH.signin} />,
            children: [
                {
                    element: <ProfileLayout />,
                    path: PATH.profile.index,
                    children: [
                        {
                            element: <Profile />,
                            index: true,
                        },
                        {
                            element: <MyCourse />,
                            path: PATH.profile.course
                        },
                        {
                            element: <MyProject />,
                            path: PATH.profile.project
                        },
                        {
                            element: <MyPayment />,
                            path: PATH.profile.payment
                        },
                        {
                            element: <MyCoin />,
                            path: PATH.profile.coin
                        }
                    ]
                }
            ]
        }
    )
}