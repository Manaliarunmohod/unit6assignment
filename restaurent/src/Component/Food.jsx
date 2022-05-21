import axios from "axios"

import { useEffect, useState } from "react"
import {Sorting} from "./Sorting"

import { FoodCart } from "./FoodCart";

export const Food=()=>{
     const [foods, setFoods ]=useState([]);

     const [page,setpage]=useState(1);
     const perpage=4;
   
   useEffect(()=>{
       getData(page,perpage)
   },[page,perpage])
 

   const handlesort=(sortby,type)=>{
if(sortby==="total_votes" && type===4)
{
    setFoods(foods.filter((el)=>{
        return el.total_votes>4
    }))
}
if(sortby==="total_votes" && type===3)
{
    setFoods(foods.filter((el)=>{
        return el.total_votes>3
    }))
}
if(sortby==="total_votes" && type===2)
{
    setFoods(foods.filter((el)=>{
        return el.total_votes>2
    }))
}
if(sortby==="total_votes" && type===1)
{
    setFoods(foods.filter((el)=>{
        return el.total_votes>1
    }))
}
if(sortby==="cost" && type===1)
{
    setFoods((prev)=> [...prev.sort((a,b)=>a.cost>b.cost?1:-1)])
    
}
if(sortby==="cost" && type===-1)
{
    setFoods((prev)=> [...prev.sort((a,b)=>a.cost>b.cost?-1:1)])
    
}
if(sortby==="cash"){
    setFoods(foods.filter((el)=>{
    return    el.payment_methods.cash===true
    }))
}
if(sortby==="card"){
    setFoods(foods.filter((el)=>{
      return  el.payment_methods.card===true
    }))
}
if(sortby==="all"){
    setFoods(foods.filter((el)=>{
       return el.payment_methods.cash===true&&el.payment_methods.card===true&&el.payment_methods.upi===true
    }))
}
   }

    const getData=(page,perpage)=>{
        axios.get("http://localhost:8080/rest",{
            method:"GET",
            params:{
                _page:page,_limit:perpage
            }
           
          }) .then((res)=>{
         
          console.log(res.data)
         setFoods([...res.data])
        })
         .catch((err)=>{
             console.log(err)
        
        });
    };

  
   

    
    return (
        <>
      
<Sorting handleSort={handlesort}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,300px)",gap:"20px"}}>
          
      {foods.map((el)=>
       <FoodCart key={el.id}
             
              img={el.img} 
              name={el.name}
              cost={el.cost} 
              categories={el.categories} 
              payment_methods={el.payment_methods} 
             
              total_votes={el.total_votes} 
              reviews={el.reviews}
               />
            
       
      )}
    

     
      </div>
      <button style={{height:"100px",width:"100px"}} onClick={()=>setpage(page-1)
    } disabled={page===1}
    >Pre</button>
      <button style={{height:"100px",width:"100px"}} onClick={()=>setpage(page+1)}>Next</button>

        </>
    )
}



