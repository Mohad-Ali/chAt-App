import React from 'react'
import Conversetion from './Conversetion'
import useGetConversetion from '../../hooks/useGetConversetion'
import { getEmoji } from '../../utils/emoji'

const Conversetions = () => {
 const {loading,conversetions} = useGetConversetion()


  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversetions.map((conversetion,indx)=>(
        <Conversetion key={conversetion._id}
        conversetion={conversetion}
        emoji={getEmoji()}
        lastIndx={indx === conversetions.length-1}
        />
      ))}
      {loading? <span className='loading loading-spinner mx-auto'></span>: null }
    </div>
  )
}

export default Conversetions



//starting
// import React from 'react'
// import Conversetion from './Conversetion'

// const Conversetions = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversetion/>
//       <Conversetion/>
//       <Conversetion/>
//       <Conversetion/>
//     </div>
//   )
// }

// export default Conversetions
