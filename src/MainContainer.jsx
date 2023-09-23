import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlaying from './VideoPlaying';
import Videotitle from './Videotitle';

const MainContainer = () => {
    const userMovie=useSelector((store)=>store.movies?.nowPlaying)
    if(!userMovie) return;
    // console.log(Math.floor(Math.random()*10));
    const movie=userMovie[Math.floor(Math.random()*userMovie.length)]
    // console.log(movie);
    const {original_title,overview,id}=movie
  return (
    <div>
        <Videotitle title={original_title } overview={overview}/>
        <VideoPlaying movieId={id} />
        
    </div>
  )
}

export default MainContainer