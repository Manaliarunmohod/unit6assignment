
  import { useContext, useState } from "react";
  import { AuthContext } from "../Context/AuthContext";
  export const Form = () => {
    const { toggleAuth, isLogin, setIsLogin } = useContext(AuthContext);
  
    const [user, setUser] = useState({ email: "", password: "" });
  
   // const alert = useToast();
  
    const [token, setToken] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          if (data.token) {
            setToken(data.token);
            toggleAuth();
            setIsLogin(true);
            // alert({
            //   title: "Login Successfull.",
            //   description: "Welcome to Dashboard...",
            //   status: "success",
            //   position: "bottom-right",
            //   duration: 5000,
            //   isClosable: true,
            // });
          } else if (data.error) {
            // alert({
            //   title: "Email or Password is wrong...",
            //   description: `${data.error}`,
            //   status: "error",
            //   position: "bottom-right",
            //   duration: 5000,
            //   isClosable: true,
            // });
          }
        });
    };
  
    return isLogin ? (
    <div>
            <h2 isTruncated>Login Successfull</h2>
        <h2 isTruncated>Token : {token}</h2>
        </div>
    ) : (
      <form onSubmit={handleSubmit}>
     
         <h2>Login</h2>

         <input  type="text"
            name="email"
            placeholder="Enter email..."
            onChange={handleChange}></input>
          
          
            <input  type="text"
            name="password"
            placeholder="Enter password..."
            onChange={handleChange}></input>
        
        
          <button type="submit" >
            Login
          </button>
       
      </form>
    );
  };