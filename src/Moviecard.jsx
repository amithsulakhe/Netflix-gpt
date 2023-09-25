import React from 'react'
import { Img_Cdn } from './utils/constants'

const Moviecard = ({movies,title}) => {
    // console.log(movies);
  
  return   movies.poster_path &&(
   
    <div className='w-40 h-80 grid items-center'>
      <h1 className='text-[18px]'>{title}</h1>
        <img className='h-60' src={Img_Cdn+movies.poster_path} alt={title} />
  
    </div>
   
  )
}

export default Moviecard