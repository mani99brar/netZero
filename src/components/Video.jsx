import React,{useState} from 'react'

export const Video = () => {
  const [src, setSrc] = useState('https://www.youtube.com/embed/RvlcznwQn6g?rel=0&showinfo=0&enablejsapi=1');

  const handlePlay = () => {
    // Append autoplay=1 to the URL to start autoplaying
    // Ensure that mute=1 is also part of the parameters for autoplay to work in most browsers
    setSrc(src + '&autoplay=1&mute=1');

    // Make the iframe visible and hide the overlay
    document.querySelector('iframe').classList.remove('hidden');
    document.querySelector('.playButton').innerHTML = 'Playing...';
    document.querySelector('.videoOver').classList.add('fadeOut');
    
  }

  return (
    <div className='w-[100%] flex flex-col justify-center items-center radialGradient'>
      <div className='lg:w-[80%] w-[90%]  relative flex flex-col justify-center items-center'>
        <h1 className='bg-white mt-40 text-center w-[100%] rounded-lg px-4 py-2 text-[#EEC839] mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green'>3D Walkthrough</h1>
        <div className='lg:w-[80%] w-[90%] lg:h-[70vh] h-[50vh] relative flex flex-col justify-center items-center'>
          <iframe 
            className='lg:w-[100%] w-[100%]'
            height="100%"
            src={src}
            title="Net Zero Homes"
            allowFullScreen
          ></iframe>
          {/* <div className='w-[100%] h-[50vh]  videoOver  bottom-0 absolute overflow-hidden bg-black'>
            <img className='w-[100%] lg:h-[100%]  scale-125' src="https://i.ytimg.com/vi/RvlcznwQn6g/maxresdefault.jpg" alt="" />
            <img className='w-[100%] lg:h-[0%]  scale-125' src="https://i.ytimg.com/vi/RvlcznwQn6g/maxresdefault.jpg" alt="" />
            <img className='w-[100%] lg:h-[0%]  scale-125' src="https://i.ytimg.com/vi/RvlcznwQn6g/maxresdefault.jpg" alt="" />
            <div className='w-[100%] h-[100%] flex absolute top-0 justify-center items-center z-10'>
              <div className='w-[100%] h-[100%] bg-black opacity-50 absolute'></div>
              <button onClick={handlePlay} className='playButton bg-red z-40 bg-[#EEC839] text-2xl tracking-[0.5rem] px-10 py-10 rounded-xl'>Play</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
