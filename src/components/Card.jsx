import React from 'react'

export const Card = ({head,bgColor}) => {
    const cardStyle = {
        background: `${bgColor} 30%`,
        // opacity: 0.7, // Adjust the opacity value as needed
      };
  return (
    <div style={cardStyle} className='w-[35%] flex flex-col mb-10 items-center justify-around h-[300px] rounded-lg'>
        <h1 className='text-2xl'>{head}</h1>
        <p className='text-6xl'>34 kW</p>
    </div>
  )
}
