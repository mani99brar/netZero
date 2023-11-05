import React from 'react'

const divStyle = {
    backgroundImage: 'url("/fullHouse.png")', // Set the background image URL
    backgroundSize: 'cover', // Adjust the background size as needed
    width: '100vw',
    height: '100vh',
  };

export const GlassEffect = () => {
  return (
    <div style={divStyle}  className='w-[100%] h-[100%] blur-md'></div>
  )
}
