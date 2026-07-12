import { use, useState } from 'react'
import axios from 'axios'; //use to send requests to backend from frontend  
import toast from 'react-hot-toast'
import { MdEmail, MdKey } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import api from '../utils/api';

export default function LoginPage(){

    const [email, setEmail] =  useState("")
    const [password, setPassword] =  useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(){
        
        setLoading(true)

        //send http request to backend includig email, password
        try{
            const res = await api.post("/users/login",{
                    email : email,
                    password : password
                }
            )
            localStorage.setItem("token", res.data.token)

            if(res.data.isAdmin){
                navigate("/admin")
            }else{
                navigate("/")
            }

            
        }catch(err){
            toast.error(err?.response?.data?.message || "Login Faiid")  // note this
        }
        setLoading(false)
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
                            setEmail(e.target.value)
                        }
                    }value={email}/>
                </div>

                <div className="w-full mt-5">
                    <label className="text-white text-lg flex items-center gap-2"><MdKey />Password</label>
                    <input className="w-full h-[40px] rounded-md px-2 border border-white" type='password' placeholder='Enter your password'
                    onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    }value={password}/>
                </div>

                <p className='w-full h-2 text-white text-right italic'> Forgot your password? click <Link to="/forget-password" className='font-bold text-accent'>Here</Link></p>
                 
                 <button disabled = {loading} className='w-full h-[50px] bg-accent mt-10 text-white rounded-lg' onClick={handleLogin}>
                    {
                        loading ? "Loading...." : "Login"
                    }
                 </button>

                 <p className='w-full h-2 text-white text-right italic'>don't have an account? click <Link to="/signup" className='font-bold text-accent'>here</Link></p>

                <button className='w-full h-[50px] bg-secondary mt-8 text-white rounded-lg flex items-center justify-center gap-3 '><FcGoogle />Sign in with Google</button>
            </div>
        </div>
    )
}