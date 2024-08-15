import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="profile pic" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-sky-500`}>hi!! whats up</div>
        <div className='chat-footer opacity-60 items-center flex gap-1 text-sm'>06:00</div>
    </div>
  )
}

export default Message
