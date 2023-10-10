import { authService } from "@/services/auth.service";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { getToken, setToken } from "../utils/token";


export const COURSE_API = import.meta.env.VITE_COURSE_API;
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API;
export const USER_API = import.meta.env.VITE_USER_API;
export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;

export const api = axios.create()
api.interceptors.response.use((res) => {
    return res.data
}, async (err) => {
    console.log(err);
    if (err.response.status === 403 & err.response.data.error_code === "TOKEN_EXPIRED") {
        try {
            const res = await authService.refreshToken({
                refreshToken: getToken().refreshToken
            })
            setToken(res.data)
            return api(err.config)
        } catch (error) {
            handleError(error)
        }
    }
    throw err
})

api.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    return config
})