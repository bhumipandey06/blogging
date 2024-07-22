
type props={
    name: string,
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const AvatarComp=({name,onclick}:props)=>{
    const arr=name.split(" ");
    if(arr.length==1){
        return <button onClick={onclick} className="rounded-full bg-gray-200 text-blue-500 h-[30px] w-[30px] flex justify-center items-center">
        {arr[0][0]}
    </button>
    }
    return <>
   
        <button onClick={onclick} className="rounded-full bg-gray-200 text-blue-500 h-[30px] w-[30px] flex justify-center items-center">
                {name.split(" ")[0][0]}{name.split(" ")[1][0]}
            </button>
 
        
    </>
}