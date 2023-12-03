import React from 'react'
import Image from 'next/image'
export const Card = ({head,bgColor,img}) => {
    const cardStyle = {
        background: `${bgColor} 30%`,
        // opacity: 0.7, // Adjust the opacity value as needed
      };
  return (
    <div style={cardStyle} className=' relative lg:w-[35%] w-[100%] flex flex-col mb-10 items-center justify-around lg:h-[300px] h-[150px] rounded-lg'>
        <img src={img} alt="" className='z-0 absolute h-[100%] blur-md'/>
        <h1 className='lg:text-4xl text-2xl text-center z-10 font-bold'>{head}</h1>
        <p className='lg:text-6xl text-4xl z-10 font-bold'>34 kW</p>
    </div>
  )
}
