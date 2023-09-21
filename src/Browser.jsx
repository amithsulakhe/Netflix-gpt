import React from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { options } from './utils/constants'
import { useDispatch } from 'react-redux'
import { addplayingmovie } from './utils/movieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browser = () => {
  const dispatch=useDispatch()
  const getdataMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json=await data.json()
    dispatch(addplayingmovie(json.results))
    // console.log(json.results);
  }
  useEffect(()=>{
    getdataMovies()
  },[])
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser