import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendmessage from '../../hooks/useSendmessage'

const MessageInput = () => {
  const [message, setmessage] = useState("")
  const {sendMessage,loading}=useSendmessage()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setmessage("")
  }

  return (
    <form onSubmit={handleSubmit} className='px-4 my-3'>
      <div className='w-full relative'>
        <input type="text" className='border border-gray-600 text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white' placeholder='Send a message'
        value={message} onChange={(e)=> setmessage(e.target.value)}/>
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
         {loading ? <span className='loading loading-spinner'></span> : <BsSend/>}
          </button>
      </div>
    </form>
  )
}

export default MessageInput
