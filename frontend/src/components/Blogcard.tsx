// import { useNavigate } from "react-router-dom"
import { AvatarComp } from "./Avatar"

type props={
    name: string,
    date: string,
    title:string,
    content: string,
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onclickRead: (event: React.MouseEvent<HTMLButtonElement>) => void,
    ondelete: (event: React.MouseEvent<HTMLButtonElement>) => void,
    endpoint: string
}

export const BlogComp=({name,date,title,content,onclick,onclickRead,ondelete,endpoint}:props)=>{
    // const navigate=useNavigate();
    return <>
        <div className="flex justify-center mt-10 cursor-pointer">
            <div className="w-[80vw] border-b border-gray-300 pb-[40px]">
                <div className="flex flex-col">
                    <div className="flex gap-3 items-center">
                        
                        <div>
                            <AvatarComp name={name} onclick={onclick}/>
                        </div>
                        <div className="text-sm">
                            {name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {date}
                        </div>
                        {(endpoint == "myblog") && <div className="pl-[1vw]">
                            <button onClick={ondelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                            </button>
                        </div>}
                        
                    </div>

                    <div className="font-extrabold pt-4 text-lg max-w-[50vw]">{title}</div>
                    <div className="text-md max-w-[50vw] pt-1">{content.slice(0,200)+"..."}</div>
                    <div className="flex pt-8 justify-between max-w-[50vw]" >
                        <div className=" text-sm text-gray-500">{`${Math.ceil(content.length/100)} min read`}</div>
                        <div>
                            <button className="text-blue-500" onClick={onclickRead}>read more...</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}