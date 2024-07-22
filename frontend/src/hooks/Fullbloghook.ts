import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useFullblog=()=>{
    const [loading,setloading]=useState(true);
    const [blod,setblog]=useState([]);

    useEffect(()=>{
        axios.post(`${BACKEND_URL}/api/v1/blog`)
    },[])
}