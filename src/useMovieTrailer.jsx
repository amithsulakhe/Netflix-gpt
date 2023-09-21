import React, { useEffect } from 'react'
import { addPlayingTrailer } from './utils/movieSlice'
import { useDispatch } from 'react-redux'
import { options } from './utils/constants'

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch()
    const getmovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const json = await data.json()
        // console.log(json);
        const getData = json.results
        const trailer = getData.filter(video => video.type === "Trailer")
        const firsttrailer = trailer.length?trailer[0]:getData[0]
        dispatch(addPlayingTrailer(firsttrailer))
        // console.log(firsttrailer);
      }
      useEffect(() => {
        getmovieTrailer()
      }, [])
}

export default useMovieTrailer