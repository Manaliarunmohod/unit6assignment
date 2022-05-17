import { useState } from "react"
import { Contactitem } from "./Contactitem";


export  const Addcontact=()=>{
    const[user,setUser]=useState({name:"",email:"",image:"",number:""});
    const[data,setData]=useState([])

      const handlechange=(e)=>{
          setUser({...user,[e.target.name]:e.target.value})
      }
      const handlesubmit=(e)=>{
       e.preventDefault();
   const userdetail=[...data,{
    name:user.name,
    email:user.email,
    image:user.image,
    number:user.number
   }]
   setData(userdetail)
      }

    return(
        <>
        <form onSubmit={handlesubmit}>
        <div>
            <label>Your name</label><br></br>
            <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handlechange}/>
        </div>
        <div>
        <label>Your email</label><br></br>
        <input type="text" id="email" name="email" placeholder="Enter your Email" onChange={handlechange}/>
        </div>
        <div>
            <label>Your image</label><br></br>
        <input type="text" id="image" name="image" placeholder="Enter your image file" onChange={handlechange}/>
       </div>
       <div>
            <label>contact number</label><br></br>
        <input type="text" id="number" name="number" placeholder="Enter your number" onChange={handlechange}/>
       </div>
       <button>Add contact</button>

        </form>
        <div>
           {data.map((item)=>{
               return <Contactitem value={item}/>
           })}
        </div>

        </>

    )
}