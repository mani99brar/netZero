import React from 'react'
import Image from 'next/image'; 
export const About = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#00A9FF] yellowGradient text-black h-[80vh]'>
        <div className='w-[80%] flex items-center h-[100%]'>
            <div className='w-[50%] flex flex-col justify-around h-[60%]'>
                <div className='my-6'>
                    <h1 className='text-6xl my-2'>About Us</h1>
                    <p className='text-xl ml-6'>Saving the future for EARTH</p>
                </div>
                <p className='text-justify text-lg leading-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas voluptate ratione excepturi officiis reiciendis, assumenda quod corrupti, quaerat cupiditate, perferendis explicabo hic dignissimos facere cumque qui quae eius. Illo, iste.</p>
            </div>
            <div className='w-[50%] h-[100%] flex items-center justify-end'>
                <img className='shadow-2xl shadow-green h-[60%]' src="/Edge.jpg" alt="" />
            </div>
        </div>
        
    </div>
  )
}
