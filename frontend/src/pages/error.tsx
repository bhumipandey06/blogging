import { useNavigate } from "react-router-dom"


export const Errorpage=()=>{
    const navigete=useNavigate();
    return <>
        <div className="flex flex-col items-center h-[100vh] gap-4">
            <div className="flex flex-col bg-red-500 w-[100vw] gap-4 py-[18vh] items-center">
                <div className="font-bold text-3xl md:text-4xl lg:text-7xl text-white">Oops, something went</div>
                <div className="font-semibold text-3xl md:text-4xl lg:text-7xl text-white">wrong!</div>
                <div className="font-semibold text-2xl text-white max-w-[80vw]">We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists.</div>
            </div>
            <div className="flex flex-col items-center w-[90vw] gap-4">
                <button className="bg-black text-white py-1 px-4 rounded active:opacity-[0.8] duration-100/6" onClick={()=>{
                    localStorage.clear();
                    navigete('/');
                }}>Go to Homepage</button>

            </div>
        </div>
    </>
}