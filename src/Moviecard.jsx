import React from 'react'
import { Img_Cdn } from './utils/constants'

const Moviecard = ({movies}) => {
    console.log(movies);
  return (
    <div className='w-40'>
        <img src={Img_Cdn+movies.poster_path} alt="" />
    </div>
  )
}

export default Moviecard