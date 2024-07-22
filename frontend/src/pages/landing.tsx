import { useNavigate } from "react-router-dom"

export const Landing=()=>{
    const navigate=useNavigate();
    return <>
        <div className="w-[100vw] h-[100vh] bg-black flex flex-col justify-center items-center gap-7">
            <div>
               <span className="text-yellow-500 font-extrabold text-4xl md:text-6xl pb-20">Your blog&nbsp;</span>
                <span className="text-white font-extrabold text-4xl md:text-6xl pb-20">is your best networking tool</span>
            </div>
            <div className="text-white font-bold text-4xl">
            Unleash Your Creativity with Our Blogging Platform
            </div>
            <div className="text-white font-semibold text-xl">Discover a world of inspiration and share your stories with our powerful blogging tools.</div>
            <div>
                <div>
                    <button className="text-lg bg-white font-bold py-1 px-4 rounded active:opacity-[0.8] duration-100/6" onClick={()=>{navigate("/signup")}}>Get Started</button>
                </div>
                
            </div>
        </div>
    </>
}