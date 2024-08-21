import React, { useEffect, useState } from 'react'
import useConversetion from '../zustand/useConversetion'
import toast from 'react-hot-toast'

const useGetmessage = () => {
    const [loading, setloading] = useState(false)
    const {messages,setmessages,selectedConversetion}=useConversetion()

   useEffect(() => {

    const getMessage=async()=>{
        setloading(true)
        try {
            const res = await fetch(`/api/message/${selectedConversetion._id}`)
            const data = await res.json()
            if(data.error) throw new Error(data.error)
                setmessages(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setloading(false)
        }
    }
    if(selectedConversetion?._id) getMessage();
   }, [selectedConversetion?._id,setmessages])
   
   return {messages,loading}
}

export default useGetmessage
