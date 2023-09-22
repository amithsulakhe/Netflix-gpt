import React from 'react'
import useMovieTrailer from './useMovieTrailer'
import {  useSelector } from 'react-redux'
import usePopular from './usePopular'
import useToprated from './useToprated'
import useUpcoming from './useUpcoming'
const VideoPlaying = ({ movieId }) => {
  const videoTrailer=useSelector((store)=>store.movies?.nowMovieTrailer)
  // console.log(videoTrailer);

  useMovieTrailer(movieId)
  usePopular()
  useToprated()
 useUpcoming()
  return (
    <div className='w-screen aspect-video'>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${videoTrailer?.key}?si=AXN8YJ3kn-XG3f4w?&autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoPlaying