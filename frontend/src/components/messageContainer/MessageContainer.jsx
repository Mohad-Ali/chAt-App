import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversetion from '../../zustand/useConversetion';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
    const{selectedConversetion,setselectedConversetion}=useConversetion()

  useEffect(() => {
    //to cleanup zustand(unmount)
   return ()=> setselectedConversetion(null)
  }, [setselectedConversetion])
  

  return (

    <div className='md:min-w-[450px] flex flex-col'>
    {!selectedConversetion ? ( <NoChatSelected/> ): (
        <>
     <div className='bg-slate-500 flex px-4 py-2 mb-2 items-center gap-2'>
       <span className='label-text '>
            <img className='w-10 rounded-full' src={selectedConversetion.profilePic} alt="user avatar" />
        </span>
        <span className='text-gray-900 font-bold'>{selectedConversetion.fullName}</span>
     </div>
     <Messages/>
     <MessageInput/>
     </>)}
    </div>
  )
}

export default MessageContainer


const NoChatSelected=()=>{
  const {authUser}=useAuthContext()
    return(
        <div className='w-full h-full flex items-center justify-center'>
            <div className='px-4 flex flex-col items-center text-center sm:text-lg md:text-xl font-semibold gap-2 text-gray-200'>
                <p>Welcome 👋🏻 {authUser.fullName} 🦋 </p>
                <p>Select a chat to start message</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}
