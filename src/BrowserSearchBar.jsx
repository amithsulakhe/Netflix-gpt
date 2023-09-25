import React, { useRef } from 'react'
import { useState } from 'react'
import { language, options } from './utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import openai from './utils/openai'
import { addgptsearchedmovies } from './utils/gptSlice'
const BrowserSearchBar = () => {
    const lang=useSelector((store)=>store.lang.chooselang)
const dispatch=useDispatch()
    // console.log(lang);
    const ref=useRef()

const particularMovieSearch=async (movie)=>{
  let data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', options)
  let json =await data.json()
  // console.log(json);
  return json.results
}
// particularMovieSearch("Lucia")
    const submitform=async (e)=>{
        e.preventDefault()
        console.log(ref.current.value);
        const filtermovie="Act as a Movie Recomendation System and Suggest some movies for query :"+ref.current.value+"only give me names of 5 movies ,comma separated like example result given ahead. Example result:gadar,jawan,patan,tiger,pk"
        // const filtermovie="suggest movie only 5 and give latest and intermidiate movies which are popular give like array in javascript which is separated by commas and dont give naming"+ref.current.value
        // const filtermovie="Suggest some 5 movies and dont give description and numbering and give latest and intermidate level movies which are more popular"+ref.current.value + "dont need description need only names and dont give numbering like '1. Raktha Kanneeru\n2. Mungaru Male\n3. Kirik Party\n4. Ugramm\n5. Anjani Putra' give like this 'Raja Nagamandala', ' Kirik Party', ' Mythri', ' Lucia', ' U Turn'"+"and give only Latest Movies and Intermediate"+"for example give like this 'Pogaru', ' Roberrt', ' Kotigobba 3', ' Yuvarathnaa', ' Adachanegaagi Kshamisi.' not like '1. Yuvarathnaa\n2. Roberrt\n3. French Biriyani\n4. Phantom\n5. Bhajarangi 2'"
        // console.log(filtermovie);
 
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: filtermovie}],
            model: 'gpt-3.5-turbo',
          });
        
        const movie=chatCompletion.choices[0].message.content.split(",")
        console.log(movie);
        const movies=movie.map((movie)=>particularMovieSearch(movie))
        const foundMovie=await Promise.allSettled(movies)
        dispatch(addgptsearchedmovies({movieNames:movie,MovieResults:foundMovie}))
        console.log(foundMovie);
    }

  return (
    <div className='pt-[20%] flex justify-center'>
        <form action="" onSubmit={submitform} className='bg-black text-white w-1/2 grid grid-cols-12'>
            <input ref={ref} className='col-span-9   py-4 px-8 m-2 outline-none rounded-b-3xl rounded-t-3xl text-black'placeholder={language[lang].gptPlaceholder} type="text"  />
            <button className='col-span-3 py-4 px-8  bg-red-500 m-2 rounded-md'>{language[lang].naam}</button>
        </form>
    </div>
  )
}

export default BrowserSearchBar