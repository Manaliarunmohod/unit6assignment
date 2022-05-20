 export const Sorting=({handleSort})=>{




return(
    <div >

<div style={{display:"flex",margin:"10px"}}>
    <button onClick={()=>{handleSort("total_votes",4)}}
>Ratings above 4</button>
    <button onClick={()=>{handleSort("total_votes",3)}}
>Ratings above 3</button>
    <button onClick={()=>{handleSort("total_votes",2)}}
>Ratings above 2</button>
    <button onClick={()=>{handleSort("total_votes",1)}}
>Ratings above 1</button>
</div>



<div>
   <button onClick={()=>{handleSort("cost",-1)}}>sort by cost High to low</button>
   <button  onClick={()=>{handleSort("cost",1)}}>sort by low to high</button>
</div>

<div>
  <button  onClick={()=>{handleSort("cash")}}>Cash Only</button>  
  <button  onClick={()=>{handleSort("card")}}>Card Only</button>  
  <button  onClick={()=>{handleSort("all")}}>All</button>  
</div>

    </div>
)
}