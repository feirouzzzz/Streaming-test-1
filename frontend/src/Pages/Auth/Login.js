import React, { useState } from 'react'
 import { Link, useNavigate } from 'react-router-dom'
import { LogoPath } from '../../Components/Variables'
function Login() { 
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    let user = { email, pass}
    

    const LoginFunction = (event) => {
        event.preventDefault();

        console.log(user)

        navigate("/home")
    }
    

  return (
    <div className='bg-purple-600 py-20 h-screen flex items-center text-white bg-gradient-to-r from-indigo-400 '>
        <div className='bg-black py-6 pb-12 w-2/5 mx-auto rounded-md'>
            <img src={LogoPath} className='w-16 mx-auto' alt='logo' />
            <h1 className='   text-2xl pt-2 pb-6 text-center font-bold'>Login to Spotify</h1>
            <form onSubmit={LoginFunction} className='px-32' >
                <div>
                    <label > Email</label>
                    <br></br>
                    <input type='email' onChange={(e)=> setEmail(e.target.value)} className='w-full bg-transparent border py-2 px-4 rounded-md mt-1.5'placeholder='Enter email' />
                </div>
                <div className='mt-6'>
                    <label > Password</label>
                    <br></br>
                    <input type='password' onChange={(p) => setPass(p.target.value)}className='w-full bg-transparent border py-2 px-4 rounded-md mt-1.5'placeholder='Enter password' />
                    
                </div>
                < button className='bg-purple-500 hover:bg-purple-600 transition-all hover:scale-105 hover:shadow-purple-300 w-full mt-12 rounded-full py-3 font-medium'>Log in</button>
            </form>
            <h1 className='text-center mt-10 underline opacity-80 hover:opacity-100 transition-all'> Forget your password? </h1>
            <div className='flex items-center justify-center space-x-2 mt-4'>
                <p className='opacity-80'> Don't have an account? </p>
                <Link to="/Signup" className=' underline opacity-80 hover:opacity-100 transition-all'> Sign up for Spotify </Link>
            </div>
        </div>
    </div>
  )
}

export default Login