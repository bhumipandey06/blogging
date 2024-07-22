import { useNavigate } from "react-router-dom"
import { AvatarComp } from "./Avatar"


type props={
    name: string,
}

export const Topbar=({name}:props)=>{
    const navigate=useNavigate();
    return <>
    <div className="pb-5">
        <div className="flex justify-between border py-1 fixed w-[100vw] bg-white top-0">
                <div className="pl-2 font-bold">Blogging site</div>
                <div className="flex justify-between gap-4 pr-2">
                    <button className="font-semibold">Home</button>
                    <button className="font-semibold" onClick={async ()=>{
                        navigate('/myblog');
                    }}>My Blogs</button>
                    <div className="pr-4"><AvatarComp name={name} onclick={()=>{
                        setTimeout(() => {
                            localStorage.clear();
                            navigate('/signin');
                        }, 2000);
                    }}/></div>
                </div>

            </div>
    </div>
        
    </>
}