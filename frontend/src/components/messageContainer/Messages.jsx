import React, { useEffect, useRef } from 'react'
import useGetmessage from '../../hooks/useGetmessage'
import MessageSkeleton from '../skeleton/MessageSkeleton'
import Message from './Message'
import useListenMessage from '../../hooks/useListenMessage'

const Messages = () => {
  const{messages,loading}=useGetmessage()
  useListenMessage()
  const lastMsgRef=useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100);
  }, [messages])
  

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message)=> (
        <div key={message._id} ref={lastMsgRef}>
          <Message  message={message}/>
        </div>
          ))}

      {loading && [...Array(3)].map((_,indx)=>  <MessageSkeleton key={indx}/>)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start a conversetion</p>
      )}
    </div>
  )
}

export default Messages
