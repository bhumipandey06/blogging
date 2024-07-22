import { Quotecomp } from "../components/Quotes"
import { Authcomp } from "../components/Auth"


export const Signup=()=>{
    return <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
        <Authcomp title='Create an account' discription='Already have an account?'/>
        </div>
        <div className="absolute invisible sm:visible sm:static">
            <Quotecomp/>
        </div>
    </div>
}