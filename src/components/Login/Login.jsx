import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Login.css'
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    
    const navigate=useNavigate();
    
   async function handleClick(e){
           e.preventDefault();
            let item={email,password};
           let result=await fetch("http://localhost:3000/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            } ,
            body:JSON.stringify(item)
           });

           result=await result.json();
           console.log(result)
           localStorage.setItem("user-info",JSON.stringify(result))
           console.log(localStorage.getItem('user-info'))
        //    navigate("/analysis");
        //    if(localStorage.getItem('user-info')){
        //     console.log("hi")
        //     navigate("/analysis")
        // }
    }

  return (
    <div className='wrapper'>
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#" onSubmit={handleClick}>
                <div className="input-box">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>

                <button type="submit" className='button i-button'>Login</button>

                <div className="login-register">
                    <p>Don't have an account?</p>
                    <Link to="/register" className='register-link'>Register</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
