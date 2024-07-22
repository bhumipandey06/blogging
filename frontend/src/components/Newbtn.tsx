type props={
    title:string,
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const Newbtn=({title,onclick}:props)=>{
    return <>
        <div className="flex mt-10 gap-3 justify-end items-center max-w-[90vw]">
            <button className="text-lg bg-green-600 text-white rounded py-1 px-3 font-bold active:opacity-[0.8] duration-100/6" onClick={onclick}>{title}</button>
        </div>
    </>
}

