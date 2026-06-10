import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const username = localStorage.getItem("username");

    return (
        <div className='flex justify-between bg-gray-600'>

            <div className="logo">
                <div className='flex  m-1 p-1'>
                    <img src="safe.png" alt="" className='h-8' />
                    <h1 className='text-green-500 text-3xl relative left-1 bottom-1'>My<span className='text-green-400 text-3xl'>Locker</span></h1>
                </div>
            </div>

            <div>
                <h1 className="text-yellow-300 text-3xl m-1 p-1 font-medium hidden sm:block">
                    Welcome, {username || "user"}
                </h1>
            </div>

            <button className='bg-black py-1 px-2 m-2 rounded-3xl hover: cursor-pointer text-white hover:bg-gray-900 '>
                <Link to="/">
                    Log Out
                </Link>
            </button>

        </div>
    )
}

export default Navbar
