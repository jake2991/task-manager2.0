import { useState, useEffect } from "react"
import {Navigate} from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import api from '../api'
import {jwtDecode} from 'jwt-decode'



function ProtectedRoutes({children}) {
    const [isAuthorized, setIsauthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setIsauthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post('/api/users/token/refresh/', {refresh: refreshToken})
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                setIsauthorized(true)
            } else {
                setIsauthorized(false)
            }
        } catch (error) {
            console.log(error)
            setIsauthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsauthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000
        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsauthorized(true)
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <Navigate to='/login/'/>
}

export default ProtectedRoutes