import { useState } from "react"
import { Buttoncomp } from "../components/Buttons"
import { Inputcomp } from "../components/Input"
import { Quotecomp } from "../components/Quotes"
import { SigninInput } from "@ayushsaini77/common-medium"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"



export const Signin=()=>{
    const navigate=useNavigate();
   

    const [input,setinput]=useState<SigninInput>({
        email: "",
        password: ""
    })
    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
        <div className="flex justify-center items-center h-[100vh] w-auto">
            <div className="flex flex-col gap-1 border-2 drop-shadow-lg py-20 px-10">
                <div className="font-bold text-md sm:xl md:2xl lg:text-4xl">Sign In</div>
                <div className="flex flex-col sm:flex-row">
                <div className="text-gray-500 text-sm md:text-md lg:text-lg font-semibold">Don't have an account</div>
                <button className="lg:pl-2 text-gray-500 underline" onClick={()=>{navigate('/signup')}}>Sign up</button>
                </div>
                <div className="mt-5">
                    <Inputcomp title="Email" type="text" placeholder="Enter your email" onchange={(e)=>{
                        setinput({...input,
                            email: e.target.value
                        })
                    }}/>
                    <Inputcomp title="Password" type="password" placeholder="" onchange={(e)=>{
                        setinput({...input,
                            password: e.target.value
                        })
                    }}></Inputcomp>
                    <Buttoncomp title="Sign In" onclick={async ()=>{
                        try{
                            const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                                email: input.email,
                                password: input.password
                            });
                            const jwt=response.data.token;
                            localStorage.setItem("token",`Bearer ${jwt}`);
                            localStorage.setItem("name",response.data.name);
                            localStorage.setItem("userId",response.data.userId.id);
                            navigate('/blog');
                        }catch(err){
                            navigate('/error');
                            console.log(err);
                        }
                    }}/>
                </div>
            </div>
            
        </div>
        
        </div>
        <div className="invisible absolute sm:visible sm:static">
            <Quotecomp/>
        </div>
    </div>
    </>
    
    
}