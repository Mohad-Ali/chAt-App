import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversetion from '../../zustand/useConversetion';
import useGetConversetion from '../../hooks/useGetConversetion';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [search, setsearch] = useState("")
  const {setselectedConversetion}=useConversetion()
  const {conversetions}=useGetConversetion()

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length <3) toast.error("Search term must be at least 3 characters long");

    const conversetion = conversetions.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversetion){
      setselectedConversetion(conversetion)
      setsearch("")
    }else toast.error("no such user fond")

  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full' value={search} onChange={(e)=>setsearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none items-center'/>
        </button>
    </form>
  )
}

export default Navbar




//starting
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const Navbar = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search..' className='input input-bordered rounded-full'/>
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <IoSearchSharp className='w-6 h-6 outline-none items-center'/>
//         </button>
//     </form>
//   )
// }

// export default Navbar