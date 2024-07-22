type props={
    title: string
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Buttoncomp=({title,onclick}: props)=>{
    return <>
        <div>
            <button onClick={onclick} className="bg-black text-white font-semibold rounded-md w-[170px] sm:w-[220px] md:w-[320px] lg:w-[420px] py-1 mt-4 active:opacity-[0.8] duration-100/6">{title}</button>
        </div>
    </>
}