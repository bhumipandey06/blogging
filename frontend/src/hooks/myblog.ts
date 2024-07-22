import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
// import { useRecoilState } from "recoil";
// import { BulkAtom } from "../atoms/Bulk";

// type props={
//     id: string 
// }

export const useMyBlog=()=>{
    const [loading,setloading]=useState(true);
    const [blog,setblog]=useState<any>([]);
    // const setbulkAtom=useRecoilState(BulkAtom);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/user/${localStorage.getItem("userId")}`).then(resp=>{
            console.log("response is"+resp.data);
            setblog(resp.data);
            setloading(false);
        })
    },[])

    console.log(blog);
    return {
        loading,blog
    }
}