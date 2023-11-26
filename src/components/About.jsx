import React from 'react'
import Image from 'next/image'; 
export const About = () => {
  return (
    <div className='w-[100%] flex justify-center flex-col items-center bg-[#00A9FF] yellowGradient text-black h-[80vh]'>
        <h1 className='bg-white text-center w-[80%] rounded-lg px-4 py-2 text-[#71C266] lg:mt-40 mt-60 mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green'>About Us</h1>
        <div className='w-[80%] flex items-center lg:flex-row flex-col-reverse h-[100%]'>
            <div className='lg:w-[50%] w-[100%] flex flex-col justify-around'>
                <div className='my-6'>
                    
                    <p className='hidden text-xl ml-6'>Saving the future for EARTH</p>
                </div>
                <p className='text-justify text-lg leading-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas voluptate ratione excepturi officiis reiciendis, assumenda quod corrupti, quaerat cupiditate, perferendis explicabo hic dignissimos facere cumque qui quae eius. Illo, iste.</p>
            </div>
            <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-end'>
                <img className='shadow-2xl shadow-green lg:h-[60%] h-[100%]' src="/Edge.jpg" alt="" />
            </div>
        </div>
        
    </div>
  )
}
