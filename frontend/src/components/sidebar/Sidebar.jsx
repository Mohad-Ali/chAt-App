import React from 'react'
import Navbar from './Navbar'
import Conversetions from './Conversetions'
import Logoutbutton from './Logoutbutton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
     <Navbar/>
     <div className='divider px-3'></div>
     <Conversetions/>
     <Logoutbutton/>
    </div>
  )
}

export default Sidebar


//starting
// import React from 'react'
// import Navbar from './Navbar'
// import Conversetions from './Conversetions'
// import Logoutbutton from './Logoutbutton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//      <Navbar/>
//      <div className='divider px-3'></div>
//      <Conversetions/>
//      <Logoutbutton/>
//     </div>
//   )
// }

// export default Sidebar