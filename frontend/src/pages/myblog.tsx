import { useNavigate } from "react-router-dom";
import { BlogComp } from "../components/Blogcard"
import { Newbtn } from "../components/Newbtn";
import { Topbar } from "../components/Topbar"
import { Blogskeleton } from "../skeleton/Blog";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useMyBlog } from "../hooks/myblog";

export const MyBlog=()=>{
    localStorage.removeItem("content");
    localStorage.removeItem("title");
    localStorage.removeItem("createdAt");
    localStorage.removeItem("authorname");
    const navigate=useNavigate();
    const {loading,blog}=useMyBlog();


    console.log(blog);
    
    const finalname=localStorage.getItem("name") || "";
    
    if(loading){
        return <div>
            <Blogskeleton/>
            </div>

    }else{
        return <>
                <Topbar  name={finalname}/>
    <Newbtn title="Create" onclick={()=>{
        navigate('/publish')
    }}/>
    
    <div>
       {blog.map((blog: {
           author: any; title: string; content: string; name: string; id: string; authorId: string; createdAt: string
})=> <BlogComp key={blog.id} name={blog.author.name} endpoint="myblog"  date={blog.createdAt} title={blog.title} content={blog.content} onclick={()=>{
   localStorage.clear();
}} onclickRead={async ()=>{
    try{
        const response=await axios.get(`${BACKEND_URL}/api/v1/blog/${blog.id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        const title=response.data.blog.title;
        const content=response.data.blog.content;
        const createdAt=response.data.blog.createdAt;
        console.log(title+" "+content+" "+createdAt);
        localStorage.setItem("authorname",blog.author.name);
        localStorage.setItem("title",title);
        localStorage.setItem("content",content);
        localStorage.setItem("createdAt",createdAt);
        navigate('/fullblog');
    }catch(err){
        navigate('/error');
        console.log(err);
    }
    
}} ondelete={async ()=>{
    await axios.post(`${BACKEND_URL}/api/v1/user/delete`,{
        id: blog.id
    })
}}/>)}
    </div>
            </>
    }
    
}

