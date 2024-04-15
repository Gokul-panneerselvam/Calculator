import { useContext } from "react"
import { CalcContext } from "../context/calcontext"

const getStyledName = btn=>{
    const className={
        "=":"equals",
        "x":"opt",
        "+":"opt",
        "-":"opt",
        "/":"opt",
        "+-":"opt",
        "%":"opt",
        "C":"clr"
    }
    return className[btn]
}


const Button =({value,key})=>{
    const {calc,setCalc} = useContext(CalcContext);

    const commaClick=()=>{
        setCalc({
            ...calc,
            num:!calc.num.toString().includes('.')? calc.num + value :calc.num
        })
    }

    const resetClick =()=>{
        setCalc({sign:"",num:0,res:0 })
    }

    const handleClickButton =()=>{
        const numberString = value.toString()

         let numberValue;

         if(numberString==="0" && calc.num===0){
            numberValue="0"
         }
         else{
            numberValue=Number(calc.num+ numberString)
         }

         setCalc({
            ...calc,
            num:numberValue
         })
    }

     const signClick =()=>{
        setCalc ({
            sign:value,
            res: !calc.res&& calc.num? calc.num:calc.res,
            num:0
        })    
    }

    const equalsClick = ()=>{
        if (calc.res && calc.num){
            const math=(a,b,sign)=>{
                const results ={
                    "+":(a,b)=>a+b,
                    "-":(a,b)=>a-b,
                    "x":(a,b)=>a*b,
                    "/":(a,b)=>a/b,
    
                     
                };
                return  results [sign](a,b);
            }
            setCalc({
                res:math(calc.res, calc.num, calc.sign),
                sign:"",
                num:0
            });

        }
    }

    const percentClick=()=>{
        setCalc({
            num:(calc.num/100),
            res:(calc.num/100),
            sign:""
        })

    }

    const invertClick=()=>{
        setCalc({
            num:calc.num? calc.num *-1:0,
            res:calc.num? calc.num *-1:0,
            sign: ""
        })
    }
    const handleClick =()=>{
        const result ={
            ".":commaClick,
            "C":resetClick,
            "/":signClick,
            "+":signClick,
            "-":signClick,
            "x":signClick,
            "=":equalsClick,
            "%":percentClick,
            "+-":invertClick

        }
        if(result[value]){
            return result[value]()

        }
        else{
            return handleClickButton()
        }
    }
    return(
        <>
        <button onClick={handleClick} className={`${getStyledName(value) } button`}>{value}</button>

        </>
    )
}

export default Button