
import {Link} from "react-router-dom"



export const Navbar=()=>{
   

    return (
        <div>

<Link to="/employees">Employees List   </Link>



        </div>
    )
}
//<Link to={isAuth?"/logout":"/login"}>{isAuth?"logout":"login"}