import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversetion from '../../zustand/useConversetion';
import { formatTime } from '../../utils/formatTime';

const Message = ({message}) => {
    const{authUser}=useAuthContext();
 
    const{selectedConversetion}= useConversetion();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversetion.profilePic;
    const bubbleBgColor = fromMe ? "bg-sky-500":"";
    const formattedTime = formatTime(message.createdAt)

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="profile pic" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-60 items-center flex gap-1 text-sm'>{formattedTime}</div>
    </div>
  )
}

export default Message
