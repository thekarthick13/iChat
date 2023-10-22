import { signOut } from "firebase/auth"
import React, { useContext } from "react"
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import ichat from "../assets/logo.png"
export default function Navbar(){
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="navbar">
            <span>
          <img width="55px"src={ichat}/>
          </span>
            <div className="user">
                
                <img src={currentUser.photoURL}/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
           
        </div>
        
    )
}