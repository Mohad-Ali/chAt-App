import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl text-gray-300 text-center font-semibold'>SignUp
            <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
            <div>
            <label htmlFor="" className='label mt-5'>Fullname</label>
            <input type="text"  placeholder='Fullname' className='w-full input input-bordered h-10'/>
            </div>
            <div>
            <label htmlFor="" className='label mt-2'>Username</label>
            <input type="text"  placeholder='Username' className='w-full input input-bordered h-10'/>
            </div>
            <div>
            <label htmlFor="" className='label mt-2'>Password</label>
            <input type="text"  placeholder='Password' className='w-full input input-bordered h-10'/>
            </div>
            <div>
            <label htmlFor="" className='label mt-2'>Confirm Password</label>
            <input type="text"  placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
            </div>

            <GenderCheckBox/>

            <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                Already have an account
            </a>
            <div>
                <button className='btn btn-block  mt-2'> Signup</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup





//starting
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl text-gray-300 text-center font-semibold'>SignUp
//             <span className='text-blue-500'> ChatApp</span>
//         </h1>
//         <form>
//             <div>
//             <label htmlFor="" className='label mt-5'>Fullname</label>
//             <input type="text"  placeholder='Fullname' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//             <label htmlFor="" className='label mt-2'>Username</label>
//             <input type="text"  placeholder='Username' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//             <label htmlFor="" className='label mt-2'>Password</label>
//             <input type="text"  placeholder='Password' className='w-full input input-bordered h-10'/>
//             </div>
//             <div>
//             <label htmlFor="" className='label mt-2'>Confirm Password</label>
//             <input type="text"  placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//             </div>

//             <GenderCheckBox/>

//             <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
//                 Already have an account
//             </a>
//             <div>
//                 <button className='btn btn-block  mt-2'> Signup</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
