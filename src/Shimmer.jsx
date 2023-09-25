import React from 'react'

const Shimmer= () => {
  return (
    <div className='p-4 flex flex-wrap justify-center gap-3 '>
      {
        Array(20).fill(" ").map((ele)=> <div className='bg-gray-700 w-52 h-72 bg-opacity-80'>
        

        </div>)
      }

    </div>

  )
}

export default Shimmer