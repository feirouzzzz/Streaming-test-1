import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")

    const newUser = {email, fullName, password}

    
    const SignupFunction = (event) => {
        event.preventDefault();
        navigate("/home")
        console.log(newUser);
    }
    

  return (
    <div className='bg-purple-600 py-20 h-screen flex items-center text-white bg-gradient-to-r from-indigo-400 '>
        <div className='bg-black py-6 pb-12 w-2/5 mx-auto rounded-md'>
x            <h1 className='text-center text-4xl font-bold mt-6'> Sign up to <br></br> start listening </h1>

            <form onSubmit={SignupFunction} className='px-32 mt-10 mx-auto'>
                <div className='flex flex-col mb-6'>
                    <label> Email address </label>
                    <input onChange={(e)=> setEmail(e.target.value)} className='bg-transparent border rounded-md py-2 px-4 mt-1' type="email" />
                </div>
                <div className='flex flex-col mb-6'>
                    <label> Full name </label>
                    <input onChange={(e)=> setFullName(e.target.value)} className='bg-transparent border rounded-md py-2 px-4 mt-1' type="text" />
                </div>
                <div className='flex flex-col mb-6'>
                    <label> Passowrd </label>
                    <input onChange={(e)=> setPassword(e.target.value)} className='bg-transparent border rounded-md py-2 px-4 mt-1' type="password" />
                </div>

                <button className='bg-purple-500 hover:bg-purple-600 transition-all hover:scale-105 hover:shadow-purple-300 w-full mt-4 rounded-full py-3 font-medium'> Sign up </button>
            </form>

            <div className='flex space-x-2 justify-center mt-10'>
                <p className=' opacity-80'> Already have an account?  </p>
                <Link to={"/login"} className=' underline'> Log in here </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup