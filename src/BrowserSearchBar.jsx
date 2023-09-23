import React from 'react'
import { useState } from 'react'
const BrowserSearchBar = () => {
    const [EnteredValue, setEnteredValue] = useState("")
    const submitform=(e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
    }
    const inputchange=(e)=>{
        setEnteredValue(e.target.value)
    
    }
  return (
    <div className='pt-[20%] flex justify-center'>


        <form action="" onSubmit={submitform} className='bg-black text-white w-1/2 grid grid-cols-12'>
            <input onChange={inputchange} value={EnteredValue} className='col-span-9   py-4 px-8 m-2 outline-none rounded-b-3xl rounded-t-3xl text-black'placeholder='Enter the Movie' type="text"  />
            <button className='col-span-3 py-4 px-8  bg-red-500 m-2 rounded-md'>Search</button>
        </form>
    </div>
  )
}

export default BrowserSearchBar