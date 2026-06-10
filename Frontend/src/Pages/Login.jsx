import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {

  const navigate = useNavigate();
  const [showpass, setshowpass] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlelogin = async (data) => {
    try {
      const response = await fetch("https://mylocker-api.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", },
          body: JSON.stringify(data),
        });
      const result = await response.json();

      if (response.ok) {
        alert("login Successfull")

        localStorage.setItem("token", result.token)
        localStorage.setItem("username", data.username)

        navigate("/dashboard")

      } else {
        alert(result.message)
      }

    } catch (error) {
      console.error(error);
      alert("server error")
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-black p-8 flex flex-col items-center  w-[90%] min-w-auto max-w-sm min-h-auto rounded-xl'>

        <div className='flex relative bottom-3'>
          <div>
            <img src="safe.png" alt="" className='h-10' />
          </div>

          <div className='mx-2'>
            <h1 className='text-green-400 text-3xl'>My<span className='text-emerald-300'>Locker</span></h1>
          </div>
        </div>

        <input
          type="text"
          placeholder='Username'
          className='bg-amber-50 m-2 p-2 rounded-2xl h-10 w-full'
          {...register("Username",
            {
              required: "Field is required",
              minLength: { value: 8, message: "Minimum length of username is 8" },
              pattern: { value: /[A-Z]/, message: "One uppercase letter is required" },
            })} />
        {errors.Username && <div className='text-red-600 text-[12px]'>{errors.Username.message}</div>}

        <div className='relative w-full right-2'>
          <input
            type={showpass ? "text" : "password"}
            placeholder='Password'
            className='bg-amber-50 m-2 p-2 rounded-2xl h-10 w-full pr-10'
            {...register("Password",
              {
                required: "Field is required",
                minLength: { value: 8, message: "Minimum length of password is 8" },
                pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, message: "Password must contain uppercase, number and special character" },
              })} />
          <input
            type="checkbox"
            className='absolute right-1 top-1/2 transform -translate-y-1/2 hover:cursor-pointer'
            onChange={() => setshowpass(!showpass)}
          />
        </div>
        {errors.Password && <div className='text-red-600 text-[12px]'>{errors.Password.message}</div>}

        <div className='flex'>

          <form onSubmit={handleSubmit(handlelogin)}>
            ...
            <button
            type='submit'
            className='bg-amber-50 px-3 py-1 m-1 rounded-2xl hover:cursor-pointer'>
              Login</button>
          </form>

          <Link
            to="/register"
            className='text-amber-50 px-3 py-1 m-1 hover:cursor-pointer '>
            SignUp</Link>
        </div>
      </div>
    </div>

  )
}

export default Login