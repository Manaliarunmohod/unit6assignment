
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth, setIsLogin } = useContext(AuthContext);

  const handleLogout = () => {
    toggleAuth();
    setIsLogin(false);
  };

  return (
   <div>
        <h2>Login</h2>

    
    
  <button onClick={isAuth ? handleLogout : null}> {isAuth ? "Logout" : "Login"}</button>
     
    </div>
  );
};