import { stateType } from "./App"


type TitleType = {
    title:string
    collapsed:boolean
    collapsedHandler:(collapsed:boolean)=> void
}

export const Title = (props:TitleType) => {
    return(
   <div onClick={()=>props.collapsedHandler(!props.collapsed)}>
       {props.title}
   </div>
    )
}