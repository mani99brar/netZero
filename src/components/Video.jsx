import React from 'react'

export const Video = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center radialGradient'>
      <div className='w-[80%] h-[70vh]'>
        <h1 className='bg-white mt-40 text-center  rounded-lg px-4 py-2 text-[#EEC839] mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green'>3D Walkthrough</h1>
        <iframe
          width="100%"
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
