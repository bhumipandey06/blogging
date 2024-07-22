import { useNavigate } from "react-router-dom";

export const SuccPost=()=>{
    const navigate=useNavigate();
    return <>
        <div className="flex flex-col items-center h-[100vh] gap-4">
            <div className="flex flex-col bg-black w-[100vw] gap-4 py-20 items-center">
                <div className="font-bold text-3xl md:text-4xl lg:text-7xl text-white">Successfully Posted</div>
                <div className="font-semibold text-xl md:text-3xl text-gray-300">Your post has been published.</div>
            </div>
            <div className="flex flex-col items-center w-[90vw] gap-4">
                <div className="font-bold text-xl">
                    Congratulations!
                </div>
                <div className="font-semibold">
                Your article has been successfully posted. It is now live and available for others to read.

We appreciate you taking the time to share your knowledge and insights with our community. Your contribution helps us all learn and grow as web developers.

Feel free to share the link to your article on social media or with your colleagues. We hope it sparks interesting discussions and helps others on their web development journey.

If you have any feedback or suggestions for improving our platform, please don't hesitate to reach out. We're always striving to provide the best possible experience for our authors and readers.

Thank you again for your valuable contribution. We look forward to seeing more great content from you in the future!
                </div>
                <div className="pt-10">
                <button className="bg-black text-white py-1 px-4 rounded active:opacity-[0.8] duration-100/6" onClick={()=>{
                    navigate('/blog');
                }}>Go to Homepage</button>
                </div>

            </div>
        </div>
    </>
}