import { useState } from "react"
import { Buttoncomp } from "./Buttons"
import { Inputcomp } from "./Input"
import { SignupInput } from "@ayushsaini77/common-medium"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

type props={
    title: string,
    discription:string
}

export const Authcomp=({title,discription}:props)=>{
    const navigate=useNavigate();
    const [input,setinput]=useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    return <>
        <div className="flex justify-center items-center h-[100vh] w-auto">
            <div className="flex flex-col border-2 drop-shadow-lg px-10 py-20">
                <div className="font-bold text-md sm:xl md:2xl lg:text-4xl ">{title}</div>
                <div className="flex flex-col sm:flex-row">
                <div className="text-gray-500 text-sm md:text-md lg:text-lg font-semibold">{discription}</div>
                <button className="lg:pl-2 text-gray-500 underline" onClick={()=>{navigate('/signin')}}>Login</button>
                </div>
                <div className="mt-5">
                <Inputcomp title="Username" type="text" placeholder="Enter your username" onchange={(e)=>{
                    setinput({...input,
                        name: e.target.value});
                }}/>
                <Inputcomp title="Email" type="text" placeholder="abc@gmail.com" onchange={(e)=>{
                    setinput({...input,
                        email: e.target.value
                    })
                }}></Inputcomp>
                <Inputcomp title="Password" type="password" placeholder="" onchange={(e)=>{
                    setinput({...input,
                        password: e.target.value
                    })
                }}/>
                <Buttoncomp title="Sign up" onclick={async ()=>{
                    try{
                        const response=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,input);
                        const jwt=response.data.jwt;
                        localStorage.setItem("token",`Bearer ${jwt}`);
                        localStorage.setItem("token",`Bearer ${jwt}`);
                        localStorage.setItem("name",input.name || "");
                        localStorage.setItem("userId",response.data.userId);
                        navigate('/blog');
                    }catch(err){
                        navigate('error');
                    }
                }}/>
                </div>
            </div>
            
        </div>
    </>
}