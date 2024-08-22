import React from 'react';  
import useConversetion from '../../zustand/useConversetion';
import { useSocketContext } from '../../context/socketContext';

const Conversetion = ({conversetion,lastIndx,emoji}) => {

   const {selectedConversetion,setselectedConversetion}= useConversetion();
   const isSelected = selectedConversetion?._id === conversetion._id;
   
   const {onlineUsers}=useSocketContext();
   const isOnline = onlineUsers.includes(conversetion._id)

  return (
   <>
   <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${ isSelected ? "bg-sky-500":""}`} 
   onClick={()=>setselectedConversetion(conversetion)}>
    <div className={`avatar ${isOnline ?"online":""}`}>
        <div className='w-12 rounded-full'>
            <img src={conversetion.profilePic} alt="user avatar" />
        </div>
    </div>
    <div className='flex flex-col flex-1'>
        <div className='flex justify-between gap-3'>
            <p className='font-bold text-gray-200'>{conversetion.fullName}</p>
            <span className='text-xl'>{emoji}</span>
        </div>
    </div>
   </div>
  {!lastIndx && <div className='divider my-0 py-0 h-1'></div>}
   </>
  )
}

export default Conversetion





//starting
// import React from 'react'

// const Conversetion = () => {
//   return (
//    <>
//    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//     <div className='avatar online'>
//         <div className='w-12 rounded-full'>
//             <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="user avatar" />
//         </div>
//     </div>
//     <div className='flex flex-col flex-1'>
//         <div className='flex justify-between gap-3'>
//             <p className='font-bold text-gray-200'>Names</p>
//             <span className='text-xl'>🤡</span>
//         </div>
//     </div>
//    </div>
//    <div className='divider my-0 py-0 h-1'></div>
//    </>
//   )
// }

// export default Conversetion