import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  console.log(movies?.nowPlaying);
  
return (

  <>

<div className="parent-trending relative ">


  <div className="child-trending text-white">
  <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
  <MovieList title={"Toprated"} movies={movies.nowPlayingToprated}/>
  <MovieList title={"Upcoming"} movies={movies.nowPlayingUpcomimg}/>
  <MovieList title={"Popular"} movies={movies.nowPlayingPopular}/>

  </div>

</div>
  


  </>
  )
}

export default SecondaryContainer