import React from 'react'
import { useSelector } from 'react-redux'
import Moviecard from './Moviecard'
import MovieList from './MovieList'

const SearchBarsugetions = () => {
  const {movieNames,MovieResults}=useSelector((store)=>store.gpt)
  if(!movieNames) return
  console.log(movieNames,MovieResults);
  return (
    <div className='bg-black text-white bg-opacity-90 my-5 '>
 
{
movieNames.map((movie,index)=><MovieList key={movie}  movies={MovieResults[index].value} />)
}
      {/* <h1>Tarzan</h1> */}
    
    </div>
  )
}

export default SearchBarsugetions