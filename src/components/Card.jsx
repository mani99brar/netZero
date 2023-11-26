import React from 'react'

export const Card = ({head,bgColor}) => {
    const cardStyle = {
        background: `${bgColor} 30%`,
        // opacity: 0.7, // Adjust the opacity value as needed
      };
  return (
    <div style={cardStyle} className='lg:w-[35%] w-[100%] flex flex-col mb-10 items-center justify-around lg:h-[300px] h-[150px] rounded-lg'>
        <h1 className='lg:text-4xl text-2xl text-center'>{head}</h1>
        <p className='lg:text-6xl text-4xl '>34 kW</p>
    </div>
  )
}
