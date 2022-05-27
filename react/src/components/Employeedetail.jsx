import { useState,useEffect} from "react";
import { useParams} from "react-router-dom";



export const EmployeeDetails=()=>{
   
  const [employee,setEmployee]=useState([])  
//   const [employ, setemp]=useState([])
const {id}=useParams()

useEffect(()=>{
    getData()
    },[])
    

async function getData(){
    const data=await fetch(`http://localhost:8080/employee/${id}`).then((d)=>d.json())
    setEmployee(data);
    console.log(data)
}
// if(!isAuth)
// {
//     return <Navigate to={"./login.jsx"}></Navigate>
// }

    return(
        <div>
         
        </div>
    )
}