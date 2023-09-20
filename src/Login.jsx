import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { auth } from './utils/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkValidateform } from './utils/Validate'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { adduser } from './utils/userSlice';
const Login = () => {
  const dispatch=useDispatch()
  const [isloggedin, setisloggedin] = useState(true)
  const [errormessage, seterrormessage] = useState(null)
  const name=useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const navigate=useNavigate()
  const handlelogin = () => {
    setisloggedin(!isloggedin)
  }
  const submitform = (e) => {
    e.preventDefault()
    console.log("clicked");
    const message = checkValidateform(email.current.value, password.current.value)
    seterrormessage(message)
    if (isloggedin) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {vid,email,displayName}=auth.currentUser
                dispatch(adduser({vid:vid,email:email,displayName:displayName}))
            // ...
          }).catch((error) => {
            // An error occurred
            seterrormessage(error.message)
            // ...
          });
          

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + errorMessage)
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage)
          navigate("")
        });
    }


    if (message) {
      alert(message)
    }
  }
  return (
    <div className='header'>
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-logo" />
      <form action="" className='absolute top-32 left-[37.5%] flex flex-col w-1/4 bg-black text-white p-4 rounded-lg bg-opacity-70'>
        <h2 className='text-3xl my-4'>{isloggedin ? "Sign In" : "Sign Up"}</h2>
        {
          isloggedin && <input ref={name} type="text" placeholder='Full name' required className='bg-slate-600 p-3 my-2 rounded-lg outline-none' />

        }
        <input ref={email} type="text" placeholder='Email or phone number' required className='bg-slate-600 p-3 my-2 rounded-lg outline-none' />
        <input ref={password} type="password" placeholder='Password' required className='bg-slate-600 p-3 my-2 rounded-lg outline-none' />
        <p className='text-red-700 font-bold text-center'>{errormessage}</p>
        <button className='p-3 my-2 bg-red-700 rounded-lg' onClick={submitform}>{isloggedin ? "Sign In" : "Sign Up"}</button>
        <p className=' my-5'>{isloggedin ? "Alerady registered" : 'New to Netflix-gpt'} <span className='hover:underline cursor-pointer' onClick={handlelogin}>{isloggedin ? "Sign in now" : "Sign up now"}</span></p>
      </form>
    </div>
  )
}

export default Login