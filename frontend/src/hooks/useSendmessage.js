import React, { useState } from 'react'
import useConversetion from '../zustand/useConversetion'
import toast from 'react-hot-toast'


const useSendmessage =() => {
 const [loading, setloading] = useState(false)
 const{messages,setmessages,selectedConversetion}=useConversetion()


const sendMessage= async(message)=>{

    setloading(true)
    try {
       const res = await fetch(`/api/message/send/${selectedConversetion._id}`,{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({message})
       })
       const data = await res.json()
       if(data.error) throw new Error(data.error)
        
        setmessages([...messages,data])
    } catch (error) {
       toast.error(error.message)
    }finally{
       setloading(false)
    }
   }
   return {sendMessage,loading}
}

export default useSendmessage
