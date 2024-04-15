import { useContext } from "react"
import { CalcContext } from "../context/calcontext"
import {Textfit} from "react-textfit"

export default function Display(){ 

    const {calc} = useContext(CalcContext);  

    return(
        <Textfit className="display" max={70}>{calc.num?calc.num:calc.res} </Textfit>
    )
}