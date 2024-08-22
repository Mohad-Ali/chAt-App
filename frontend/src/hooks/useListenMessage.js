import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversetion from '../zustand/useConversetion'
import notification from "../assets/sound/livechat-129007.mp3"

const useListenMessage = () => {
  const {socket}=useSocketContext()
  const {messages,setmessages}= useConversetion()

  useEffect(() => {
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true;
        const sound = new Audio(notification);
        sound.play();
        setmessages([...messages,newMessage]);
    })  
    return ()=> socket?.off("newMessage")
  }, [socket,messages,setmessages])
}

export default useListenMessage
