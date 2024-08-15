import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
  return (

    <div className='md:min-w-[450px] flex flex-col'>
    {noChatSelected ? ( <NoChatSelected/> ): (
        <>
     <div className='bg-slate-500 px-4 py-2 mb-2'>
       <span className='label-text'>To : </span><span className='text-gray-900 font-bold'>mohd ali</span>
     </div>
     <Messages/>
     <MessageInput/>
     </>)}
    </div>
  )
}

export default MessageContainer


const NoChatSelected=()=>{
    return(
        <div className='w-full h-full flex items-center justify-center'>
            <div className='px-4 flex flex-col items-center text-center sm:text-lg md:text-xl font-semibold gap-2 text-gray-200'>
                <p>Welcome 👋🏻 Alii 🦋 </p>
                <p>Select a chat to start message</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}
