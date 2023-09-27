import React, { useEffect,useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { adduser, removeuser } from './utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from './utils/constants';
import { addgptsearcher } from './utils/gptSlice';
import { addLanguageSlice } from './utils/langSlice';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userName=useSelector((store)=>store.user)
  // console.log(userName);
  const languageshower=useSelector((store)=>store.gpt.gptslicer)
  useEffect(()=>{
    const unsubsrcibe=onAuthStateChanged(auth, (user) => {
        if (user) {
            const {vid,email,displayName}=user
            dispatch(adduser({vid:vid,email:email,displayName:displayName}))
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
        navigate("/browser")

          // ...
        } else {
            dispatch(removeuser())
          // User is signed out
          // ...
          navigate("/")

        }
      });
      return ()=>unsubsrcibe()
},[])
  const signOutHandler=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("error")
    });
  }
  const handlechange=()=>{
    console.log("clicked");
    dispatch(addgptsearcher())
  }
  const handleoptions=(e)=>{
    console.log(e.target.value);
    dispatch(addLanguageSlice(e.target.value))
  }
  return (
    <div className='flex flex-col items-end justify-between fixed z-10 align-middle w-screen px-8 py-3 bg-gradient-to-b from-black md:flex-row'>
        <img className='w-32 m-auto md:m-0' src={logo} alt="logo" />

        <div className={!languageshower?'grid  grid-flow-col w-3/5 place-items-center md:w-2/5':'grid grid-flow-col w-4/5 place-items-center md:w-2/5'}>
          {
            languageshower && <select name="" id="" className='bg-sky-900 text-white py-2 px-3 outline-solid outline-2 outline-sky-400 border-solid border-2 border-sky-400 rounded-lg' onChange={handleoptions} >
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
            <option value="kannada">Kannada</option>
          </select>
          }
          {
            userName?.displayName &&
          <h1 className='bg-white text-black py-2 px-4 mx-4 my-2 font-bold text-center rounded-lg'>{ userName.displayName }</h1>

          }
   
          <button className={!languageshower?'bg-purple-600 py-2 px-4 rounded-lg mx-4 text-white':'bg-red-600 py-2 px-4 rounded-lg mx-4 text-white'} onClick={handlechange}>{!languageshower?"GPT Search":"Home"}</button>
          <button className='bg-red-600 rounded-md text-white p-2' onClick={signOutHandler}>Sign Out</button>
        </div>
    </div>
  )
}

export default Header