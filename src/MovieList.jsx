import React from 'react'
import Moviecard from './Moviecard'

const MovieList = ({movies,title}) => {
  return (
    
  movies && 
<div className="container-movie pl-5">

    <h1 className='text-2xl font-bold'>{title}</h1>
    
    <div className='specialmovies grid grid-flow-col gap-x-3 overflow-x-scroll pt-3'>
        {
            movies.map((movie)=>
            <Moviecard key={movie.id} movies={movie} />

            )
        }
    </div>
</div>



  )
}

export default MovieList