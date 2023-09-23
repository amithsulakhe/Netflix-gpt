import React from 'react'
import BrowserSearchBar from './BrowserSearchBar'
// import SearchBarsugetions from './SearchBarsugetions.jsx'

const GptSearch = () => {
  return (
    <div>
      <img className='absolute -z-10 w-screen h-screen object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-logo" />

        <BrowserSearchBar/>
        {/* <SearchBarsugetions/> */}
    </div>
  )
}

export default GptSearch