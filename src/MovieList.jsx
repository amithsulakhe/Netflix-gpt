import React from 'react'
import Moviecard from './Moviecard'
import Shimmer from './Shimmer';

const MovieList = ({movies,title}) => {
  // console.log(movies.length);
  return (
    movies &&

<div className="container-movie pl-5 flex flex-col">

    <h1 className='text-2xl font-bold'>{title}</h1>
    
    <div className='specialmovies grid grid-flow-col gap-x-3 overflow-x-scroll pt-3'>
        {
            movies.map((movie)=>
            <Moviecard key={movie.id} title={movie.title} movies={movie} />

            )
        }
    </div>
</div>



  )
}

export default MovieList