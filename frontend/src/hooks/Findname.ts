import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"

export const usefindname=async ()=>{
    const [name,setname]=useState<string>("");
    try{
        const response=await axios.get(`${BACKEND_URL}/api/v1/user/decode`,{headers:{
            Authorization: localStorage.getItem("token")
        }})
        setname(response.data.name);
    }catch(err){
        console.log(err);
    }
    
    return name;
    
}