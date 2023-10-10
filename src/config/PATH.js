const PORFILE_PATH = '/profile'
const COURSE_PATH = '/course'

export const PATH = {
    index: '',
    course: COURSE_PATH,
    // course_detail: COURSE_PATH + '/:slug-id:id',
    // new version of generatePath just work with one variable/segment
    course_detail: COURSE_PATH + '/:slug/:id',
    contact: '/contact',
    faq: '/faq',
    payment: '/payment',
    coin: '/coin',
    project: '/project',
    register: '/register/:slug-id:id',
    resetPassword: '/reset-password',
    signin: '/signin',
    signup: '/signup',
    team: '/team',
    profile: {
        index: PORFILE_PATH + '',
        coin: PORFILE_PATH + '/coin',
        course: PORFILE_PATH + '/course',
        payment: PORFILE_PATH + '/payment',
        project: PORFILE_PATH + '/project',
    },
    Page404: '/*'
}