import React, { useEffect } from 'react'
import { addplayingPopular } from './utils/movieSlice'
import { useDispatch } from 'react-redux'
import { options } from './utils/constants'

const usePopular = () => {
    const dispatch=useDispatch()
    const getmoviePopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const json = await data.json()
        // console.log(json);
        const getData = json.results
        // const trailer = getData.filter(video => video.type === "Trailer")
        // const firsttrailer = trailer.length?trailer[0]:getData[0]
        dispatch(addplayingPopular(getData))
        
        // console.log(firsttrailer);
      }
      useEffect(() => {
        getmoviePopular()
      }, [])
}

export default usePopular