import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">male</span>
                    <input type="checkbox" defaultChecked className="checkbox border-2 border-slate-900 " />
                </label>
        </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">female</span>
                    <input type="checkbox" defaultChecked className="checkbox border-2 border-slate-900 " />
                </label>
        </div>
    </div>
  )
}

export default GenderCheckBox


//starting
// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">male</span>
//                     <input type="checkbox" defaultChecked className="checkbox border-2 border-slate-900 " />
//                 </label>
//         </div>
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">female</span>
//                     <input type="checkbox" defaultChecked className="checkbox border-2 border-slate-900 " />
//                 </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckBox
