import React, { useState } from 'react';
import "../login.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/logo.png"


export default function Login(){
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Successful");
        navigate("/");
      } catch (err) {
        setErr(true);
      }
    };
    return(
    <div className='formContainer'>
        <div className='formWrapper'>
            <img width="80px" src={logo}/>
            <h3 className='title'>Login</h3>

             <form onSubmit ={handleSubmit}>
          
                <input type="email" placeholder='e-Mail'/>
                <input type='password' placeholder='Password'/>
             
               
                <button className='ui-btn'><span>Login</span></button>
                {err && <span>Something went wrong</span>}
             </form>
             
             <p>Don't have an account? <Link to={"/register"}>Sign Up</Link></p>


    </div>
    </div>
    )
}