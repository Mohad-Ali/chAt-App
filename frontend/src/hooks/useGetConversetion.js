import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversetion = () => {
    const [loading, setloading] = useState(false)
    const [conversetions, setconversetions] = useState([])

    useEffect(() => {
        
        const getConversetion=async()=>{
            setloading(true)
            try {
                 const res=await fetch("/api/user")
                 const data = await res.json()
                 if(data.error){
                    throw new Error(data.error)
                 }
                setconversetions(data)
                 
            } catch (error) {
                toast.error(error.message)
            }finally{
                setloading(false)
            }
        }
        getConversetion();
    }, [])
    
    return{loading,conversetions}
 
}

export default useGetConversetion
