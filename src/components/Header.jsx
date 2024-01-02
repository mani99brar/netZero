import React from 'react'
import { Navbar } from './Navbar'
import {Counter} from './Counter'
import Image from 'next/image'

export const Header = () => {
    
  return (
    <div className='w-[100vw] flex flex-col items-center  h-[100vh] relative greenGradient '>
        <Navbar />
        <div className='lg:w-[70%] w-[90%]  flex justify-between items-center relative h-[80vh]'>
            <div className='firstBall lg:flex hidden'></div>
            <div className='secondBall lg:flex hidden'></div>
            <div className='lg:w-[50%] relative lg:top-0 top-20 lg:mt-0 mt-40 w-[100%] flex justify-center'>
                <p className='lg:text-8xl  text-6xl text-center  tracking-widest z-20'>NET-Zer0<br /> CARBON</p>
                {/* <div className='w-[60%] flex flex-col border-4 border-black h-[100%]'>
                    <p className='h-[80%] flex text-8xl tracking-widest justify-center items-center'>1286214K</p>
                    <p className='bg-black h-[20%] text-lg tracking-widest flex items-center justify-center text-white'>Electricity Saved</p>
                </div> */}
            </div>
            {/* <div className='w-[100%] flex justify-center'>
                <p className='compHead mr-60'>ZER0</p>
            </div> */}
            <div className='w-[100%] lg:w-[50%] lg:z-20 lg:relative absolute  z-10 flex flex-col justify-between'>
                
                <img className='w-[100%] lg:bottom-0 mb-20 lg:mb-20 lg:mt-0 mt-20 relative bottom-20' src="earth.png" alt="" />
                
                {/* <div className='w-[40%] border-4   border-black h-[100%]'>
                    <p className='flex justify-center items-center h-[80%] text-6xl tracking-widest'>Something else</p>
                    <p className='bg-black h-[20%] text-lg tracking-widest flex items-center justify-center text-white'>Earth Saved</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}
