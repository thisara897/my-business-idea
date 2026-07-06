import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function LoginPage(){

    const [email, setEmail] =  useState("")
    const [password, setPassword] =  useState("")

    async function handleLogin(){
        
        try{
            const res = await axios.post("http://localhost:3000/users/login",{
                email : email,
                password : password //information that pu request conatain
            }
        )
        console.log(res)
        }catch(err){
            console.log(err)
            toast.error("Login Failed")
        }
        
    
    }

    return(
        <div className="w-full h-full bg-[url('bg_image.png')] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl shadow-white rounded-xl flex flex-col p-4">
                <h1 className="w-full h-[80px] text-center text-3xl font-bold text-white ">Login</h1>

                <div className="w-full">
                    <label className="text-white text-lg flex items-center gap-2"><MdEmail/>Email</label>
                    <input className="w-full h-[40px] rounded-md px-2 border border-white" type='email' placeholder='Enter your email'
                    onChange={
                        (e)=>{
                            console.log(e.target.value)
                            setEmail(e.target.value)
                        }
                    }value={email}/>
                </div>

                <div className="w-full mt-5">
                    <label className="text-white text-lg flex items-center gap-2">Password</label>
                    <input className="w-full h-[40px] rounded-md px-2 border border-white" type='password' placeholder='Enter your password'
                    onChange={
                        (e)=>{
                            console.log(e.target.value)
                            setPassword(e.target.value)
                        }
                    }value={password}/>
                </div>

                <p className='w-full h-2 text-white text-right italic'> Forgot your password? click <Link to="/forget-password" className='font-bold text-accent'>here</Link></p>
                 
                 <button className='w-full h-[50px] bg-accent mt-10 text-white rounded-lg' onChange={handleLogin}>Sign in</button>

                 <p className='w-full h-2 text-white text-right italic'>don't have an account? click <Link to="/signup" className='font-bold text-accent'>here</Link></p>

                <button className='w-full h-[50px] bg-secondary mt-5 text-white rounded-lg'>Sign in with Google</button>
            </div>
        </div>
    )
}