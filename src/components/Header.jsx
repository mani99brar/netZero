import React from 'react'
import { Navbar } from './Navbar'
import {Counter} from './Counter'
import Image from 'next/image'

export const Header = () => {
    
  return (
    <div className='w-[100vw] flex flex-col items-center  h-[100vh] relative greenGradient '>
        <Navbar />
        <div className='w-[70%] flex justify-between items-center relative h-[80vh]'>
            <div className='firstBall'></div>
            <div className='secondBall'></div>
            <div className='w-[50%] flex justify-between'>
                <p className='compHead tracking-widest'>NET-Zer0 <br /> CARBON</p>
                {/* <div className='w-[60%] flex flex-col border-4 border-black h-[100%]'>
                    <p className='h-[80%] flex text-8xl tracking-widest justify-center items-center'>1286214K</p>
                    <p className='bg-black h-[20%] text-lg tracking-widest flex items-center justify-center text-white'>Electricity Saved</p>
                </div> */}
            </div>
            {/* <div className='w-[100%] flex justify-center'>
                <p className='compHead mr-60'>ZER0</p>
            </div> */}
            <div className='w-[50%] flex flex-col justify-between'>
                
                <img src="earth.png" alt="" />
                
                {/* <div className='w-[40%] border-4   border-black h-[100%]'>
                    <p className='flex justify-center items-center h-[80%] text-6xl tracking-widest'>Something else</p>
                    <p className='bg-black h-[20%] text-lg tracking-widest flex items-center justify-center text-white'>Earth Saved</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}
