import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { adduser, removeuser } from './utils/userSlice';
import { useDispatch } from 'react-redux';
import { logo } from './utils/constants';
import { addgptsearcher } from './utils/gptSlice';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
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
  return (
    <div className='flex justify-between fixed z-10 align-middle absolute w-screen px-8 py-3 bg-gradient-to-b from-black'>
        <img className='w-44' src={logo} alt="logo" />

        <div>
          <button className='bg-purple-600 py-2 px-4 rounded-lg mx-4 text-white' onClick={handlechange}>GPT Search</button>
          <button className='bg-red-600 rounded-md text-white p-2' onClick={signOutHandler}>Sign Out</button>
        </div>
    </div>
  )
}

export default Header