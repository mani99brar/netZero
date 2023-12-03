import React from 'react'

export const Video = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center radialGradient'>
      <div className='lg:w-[80%] w-[90%] lg:h-[100vh] h-[70vh] flex flex-col justify-center items-center'>
        <h1 className='bg-white mt-40 text-center w-[100%]  rounded-lg px-4 py-2 text-[#EEC839] mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green'>3D Walkthrough</h1>
        <iframe
          className='lg:w-[100%] w-[90%]'
          height="100%"
          src="https://www.youtube.com/embed/RvlcznwQn6g"
          title="Your Video Title"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
