import { useState } from "react"
import { Newbtn } from "../components/Newbtn"
import { PubComp } from "../components/PubComp"
import { Topbar } from "../components/Topbar"
import { Createblog } from "@ayushsaini77/common-medium"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { ContentPub } from "../components/ContentPub"
import { useNavigate } from "react-router-dom"




export const PublishComp=()=>{
   const navigate=useNavigate();
    const [input,setinput]=useState<Createblog>({
        title: "",
        content: ""
    })
    const finalname=localStorage.getItem("name") || "";
    return <>
    
        <div>
            <Topbar name={finalname}/>
        </div>
        <div><Newbtn title="Publish" onclick={async ()=>{
            try{
                const resp=await axios.post(`${BACKEND_URL}/api/v1/blog/post`,{
                    title: input.title,
                    content: input.content
                },{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate('/success');
                console.log("success "+resp.data);
            }catch(err){
                navigate('/error');
                console.log(err);
                console.log(input);
                alert("Something went wrong, unable to publish blog successfully.");
            }
            
            
        }}/></div>
        <div><PubComp type="string" placeholder="Title" onchange={(e)=>{
            setinput({...input,title:e.target.value})
        }}/></div>
        <div>
            <ContentPub type="string" placeholder="Tell your story..." onchange={(e)=>{
                setinput({...input,content:e.target.value})
            }}/>
        </div>
        
    </>
}