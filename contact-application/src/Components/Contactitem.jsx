 import { useState } from "react"
import "./Contact.css"


export  const Contactitem=({value})=>{
    const[toggle,setToggle]=useState(false);
    return (
       <div className="container" onClick={()=>{setToggle(!toggle)}}>
          <div>
              <img src={value.image} alt="user_img" className="img"/>
          </div>
          <div>
              <p>{value.name}</p>
              <p>{value.email}</p>
              {toggle && <p>contact Number:{value.number}</p>}
          </div>
       </div>
    )
}