import React, { useContext } from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
    const { data } = useContext(ChatContext);

    const handleCameraClick = () => {
        const isUgly = window.confirm("Start a Video Chat?");
        if (isUgly) {
            alert("Too ugly for Video chat 🤮");
        }
    };

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img
                        className="cam"
                        src={Cam}
                        onClick={handleCameraClick}
                    />
                    <img className="add" src={Add} />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}
