import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [showpass, setShowpass] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handlelogin = async (e) => {
        e.preventDefault()

        if (!username || !password) {
            alert("All fields are required")
            return
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const data = await response.json()

            console.log("Login response:", data)

            if (response.ok) {
                alert("Login successful")

                localStorage.setItem("username", data.user?.username || username)

                navigate("/dashboard", {
                    state: { username: data.user?.username || username }
                })

                setUsername("")
                setPassword("")

            } else {
                alert(data.message)
            }

        } catch (error) {
            console.log(error)
            alert("Server is not responding")
        }
    }

    return (
        <div className='h-screen bg-purple-900 flex flex-col items-center justify-center'>

            <h1 className='text-3xl text-white mb-4'>
                My <span className='font-bold text-emerald-400'>Locker</span>
            </h1>

            <div className='bg-purple-400 w-[90%] max-w-md h-[70%] rounded-3xl flex flex-col p-6 shadow-xl'>

                <div className='text-center text-2xl text-white font-medium mb-6'>
                    Enter Your Credentials
                </div>

                <div className='flex flex-col flex-1 justify-center'>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full h-10 mb-4 px-4 rounded-3xl bg-white outline-none'
                    />

                    <div className='relative w-full'>

                        <input
                            type={showpass ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full h-10 mb-4 px-4 pr-14 rounded-3xl bg-white outline-none'
                        />

                        <input
                            type="checkbox"
                            className='absolute right-4 top-3.5 cursor-pointer'
                            onChange={() => setShowpass(!showpass)}
                        />
                    </div>

                </div>

                <div className='flex justify-center gap-10 items-center'>

                    <button
                        className='bg-purple-300 px-5 py-1 rounded-2xl hover:bg-purple-200 transition cursor-pointer'
                        onClick={handlelogin}
                    >
                        Log in
                    </button>

                    <Link
                        to="/register"
                        className='text-black hover:text-blue-700 transition cursor-pointer'
                    >
                        Sign up
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Login