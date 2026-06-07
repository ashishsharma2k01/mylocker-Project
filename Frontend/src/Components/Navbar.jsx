import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const username = location.state?.username

    const handlelogout = () => {
        navigate("/")
    }

    return (
        <nav className='h-14 w-full bg-purple-700 flex items-center justify-between px-4 shadow-md'>

            <h1 className='text-2xl text-white'>
                My <span className='font-bold text-emerald-400'>Locker</span>
            </h1>

            <h2 className='text-yellow-300 text-lg font-medium hidden sm:block'>
                Welcome, {username || "User"}
            </h2>

            <button
                onClick={handlelogout}
                className='text-white bg-black px-4 py-1 rounded-2xl hover:bg-gray-800 transition cursor-pointer'
            >
                Log out
            </button>

        </nav>
    )
}

export default Navbar