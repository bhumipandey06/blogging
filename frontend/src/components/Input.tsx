import { ChangeEvent } from "react"

type props={
    title: string,
    placeholder: string,
    type: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Inputcomp=({title,placeholder,type,onchange}:props)=>{
    return <>
        <div className="flex mt-1">
            <div className="flex flex-col gap-1">
                <div className="font-semibold text-lg">{title}</div>
                <input type={type} onChange={onchange} className="border bg-gray-100 border-gray-200 rounded-md w-[170px] sm:w-[220px] md:w-[320px] lg:w-[420px] pl-2 py-1" placeholder={placeholder}></input>
            </div>
        </div>
    </>
}