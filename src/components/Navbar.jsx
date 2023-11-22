import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-[100%] p-8 text-xl justify-center flex text-black border-2'>
        <div className='flex w-[80%]'>
            <div className=' w-[90%] flex '>
                <span className=' mr-40 '>Comp Name</span>
                <ul className='hidden space-x-20 lg:flex'>
                    <li>About</li>
                    <li>Design</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='w-[20%] flex justify-end'>
                <button>3D Model</button>
            </div>
            
        </div>
        
    </div>
  )
}


