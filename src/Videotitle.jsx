import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-24 w-screen aspect-video absolute  text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-serif'>
        {
          title
        }
      </h1> 
      <p className='w-1/4 py-8'>
        {overview}
      </p>
      <div className="title-btn">
        <button className='w-32 p-2 mx-2 rounded-lg bg-white font-bold text-xl text-black hover:bg-opacity-80 '>Play</button>
        <button className='w-32 p-2 rounded-lg bg-gray-500 font-bold text-xl text-white bg-opacity-50' >More Info</button>
      </div>
    </div>
  )
}

export default Videotitle