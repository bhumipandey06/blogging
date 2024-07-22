import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
// import { useRecoilState } from "recoil";
// import { BulkAtom } from "../atoms/Bulk";



export const useBlog=()=>{
    const [loading,setloading]=useState(true);
    const [blog,setblog]=useState<any>([]);
    // const setbulkAtom=useRecoilState(BulkAtom);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/user/bulkpost`).then(resp=>{
            setblog(resp.data);
            setloading(false);
        })
    },[])

    console.log(blog);
    return {
        loading,blog
    }
}