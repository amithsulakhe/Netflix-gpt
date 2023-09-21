import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  console.log(movies.nowPlaying);
return (

  <>
<div className="parent-trending relative">
  <div className="child-trending text-white">
  <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
  <MovieList title={"Trending"} movies={movies.nowPlaying}/>
  </div>

</div>
  


  </>
  )
}

export default SecondaryContainer