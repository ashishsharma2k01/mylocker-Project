import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [showpass, setshowpass] = useState(false)

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [repassword, setrepassword] = useState("")

    const navigate = useNavigate()

    const handleregister = async () => {

        console.log("Register clicked")

        if (!username || !password || !repassword) {
            alert("All fields are required")
            return
        }

        if (password !== repassword) {
            alert("Passwords do not match")
            return
        }

        try {

            const response = await fetch("https://mylocker-api.onrender.com/api/auth/register", {
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

            console.log("Backend Response:", data)

            if (response.ok) {
                alert("Registered successfully")

                setusername("")
                setpassword("")
                setrepassword("")

                navigate("/")
            } else {
                alert(data.message)
            }

        } catch (error) {
            console.log("Error:", error)
            alert("Server not responding")
        }
    }

    return (
        <div className='h-screen bg-purple-900 flex flex-col items-center justify-center'>

            <h1 className='text-3xl text-white mb-4'>
                My <span className='font-bold text-emerald-400'>Locker</span>
            </h1>

            <div className='bg-purple-400 w-[90%] max-w-md rounded-3xl flex flex-col p-6 shadow-xl'>

                <div className='text-center text-2xl text-white font-medium mb-6'>
                    Create Your Credentials
                </div>

                <div className='flex flex-col flex-1 justify-center'>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        className='w-full h-10 mb-4 px-4 rounded-3xl bg-white outline-none'
                    />

                    <input
                        type={showpass ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className='w-full h-10 mb-4 px-4 rounded-3xl bg-white outline-none'
                    />

                    <input
                        type={showpass ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={repassword}
                        onChange={(e) => setrepassword(e.target.value)}
                        className='w-full h-10 mb-4 px-4 rounded-3xl bg-white outline-none'
                    />

                    <label className='flex items-center gap-2 text-sm text-black mb-4 relative left-2'>
                        <input
                            type="checkbox"
                            onChange={() => setshowpass(!showpass)}
                        />
                        Show Password
                    </label>

                </div>

                <button
                    onClick={handleregister}
                    className='bg-purple-300 px-5 py-2 rounded-2xl hover:bg-purple-200 transition cursor-pointer'
                >
                    Register
                </button>

            </div>
        </div>
    )
}

export default Register