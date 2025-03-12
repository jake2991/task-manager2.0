import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


function Form({route, method}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === 'login' ? 'Login' : 'Register'

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await api.post(route, {username, password})
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate('/')
            } else {
                navigate('/login')
            }
        } catch (error) {
            console.log('error is here')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input type="text" className="form-input" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="form-input" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="form-button" type="submit" disabled={loading}>
                {loading ? 'Submitting' : name}
            </button>
        </form>
        </>
    )
}

export default Form