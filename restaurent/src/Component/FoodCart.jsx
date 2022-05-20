import { useState } from "react"

export const FoodCart=({id ,img,name, cost,categories,total_votes,reviews,payment_methods
})=>{

const [data,setData]=useState([])


    return(
        <div >
            <img src={img} width="300px"/>
            <p>{name} </p> 
        <p>  price: {cost} </p> 
       
        <p>      {total_votes} </p> 
      
          <p> review: {reviews}</p>
          <p>  {id}</p>
          <p>{categories.join(", ")}</p>
          <p>payment: {payment_methods.cash ?"cash":""}  {" "}
                     {payment_methods.card ?"card ":""}  {" "}
                      {payment_methods.upi ?"UPI ":"" }
          </p>


        </div>
    )
}