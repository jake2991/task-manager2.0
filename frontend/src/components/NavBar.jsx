import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // useEffect(() => {
    //     checkedIfLoggedIn()
    // }, [])

    // const checkedIfLoggedIn = async () => {
    //     try {
    //         const res = await api.get('/api/users/')
    //         if (res.status === 200) {
    //             setIsLoggedIn(true)
    //         } else {
    //             setIsLoggedIn(false)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="contianer mx-auto flex justify-between items-center">
                <div className="text-gray-200 text-xl font-bold">
                    My App
                </div>
                <div className="space-x-4">
                    <Link className="text-gray-200">Home</Link>
                    <Link to={'/logout'} className='text-gray-200'>Logout</Link>
                    <Link to={'/login'} className='text-gray-200'>Login</Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar