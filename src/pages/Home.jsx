import React from "react";
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"
import "../index.css"
import logo from "../assets/logo.png"

export default function Home(){
    return(
        <div className="home">
            
            <div className="container">
               <Sidebar/>
               <Chat/>
            </div>
            
        </div>
    )
}