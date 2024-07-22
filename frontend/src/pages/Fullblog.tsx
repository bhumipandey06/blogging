import { Topbar } from "../components/Topbar"

// type props={
//     title: string,
//     content: string,
//     createdAt: string,
// }

export const Fullblog=()=>{
    return <>
        <Topbar name={localStorage.getItem("name") || ""}/>
        <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-2 flex justify-center items-center h-[100vh]">
                <div className="flex flex-col">
                    <div className="text-4xl font-bold max-w-[60vw]">{localStorage.getItem("title")}</div>
                    <div className="text-gray-500 text-md pt-4">Posted on {localStorage.getItem("createdAt")}</div>
                    <div className="text-gray-700 max-w-[60vw] text-lg pt-7">{localStorage.getItem("content")}</div>
                </div>
            </div>

            <div className="flex justify-center items-center invisible md:visible">
                <div className="flex flex-col">
                    <div className="font-bold text-md pb-5">Author</div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="rounded-full h-[20px] w-[20px] bg-gray-300"></div>
                        <div>
                            <div className="text-lg font-bold">{localStorage.getItem("authorname") || ""}</div>
                            <div className="text-gray-500">Master of merth, purveyor of puns, and the funniest person in the kingdom</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}