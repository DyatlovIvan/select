type BodyType = {
  item:string[]
  callback:(item:string,collapsed:boolean)=>void
    collapsed:boolean
}

export const Body = (props:BodyType)=>{
  return(
      <div>
        {props.item.map(m=><li onClick={()=>props.callback(m,!props.collapsed)}>{m}</li>)}
      </div>
  )
}