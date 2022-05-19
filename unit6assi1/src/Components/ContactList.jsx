import { useState } from "react"
import ContactCard from "./ContactCard"
const initialdata=[
    {
        id:1,
        name:"Manali",
        email:"manalimohod19@gmail.com",
        phone:8379058540
    },
    {
        id:2,
        name:"Monali",
        email:"manalohod19@gmail.com",
        phone:8379058540
    },
    {
        id:3,
        name:"Mnali",
        email:"manalimohod19@gmail.com",
        phone:8379058540
    },
    {
        id:4,
        name:"Mali",
        email:"manalimod19@gmail.com",
        phone:8379058540
    },  {
        id:5,
        name:"Manai",
        email:"manalimd19@gmail.com",
        phone:8379008540
    }
]

const ContactList=()=>{

    const [data,setData]=useState(initialdata)

    return(
        <div>

{data.map((item)=>(
<ContactCard name={item.name} email={item.email} key={item.id} phone={item.phone}/>
)

)}

        </div>
    )
}



export default ContactList