
import { useState } from "react"
import "./Contactcard.css"
const ContactCard=(props)=>{

    const {name,email,id,phone}=props
    const [isActive,setIsActive]=useState(false)

    return(
        <div className="container">

<div>{name}</div>
<div>{email}</div>

{

<div className="container1">{
    isActive?(
    <div onClick={()=>setIsActive(!isActive)}>{""}clicked to show more</div>):(<div onClick={()=>setIsActive(!isActive)}>{phone}</div>)
}</div>


}




        </div>
    )
}

export default ContactCard;