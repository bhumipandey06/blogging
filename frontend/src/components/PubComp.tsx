import { ChangeEvent } from "react"

type props={
    placeholder: string,
    type: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
}



export const PubComp=({placeholder,onchange,type}: props)=>{
    return <>
        <div className="flex flex-col items-center pt-[40px] h-[30vh] max-w-[80vw] gap-3">
            <div>
                
            <input placeholder={placeholder} type={type}  onChange={onchange} className="text-3xl w-[60vw] outline-none  text-gray-500 pl-2 py-1"/>
            </div>
        </div>
    </>
}