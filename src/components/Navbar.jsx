import React from 'react'
import Image from 'next/image'
export const Navbar = () => {
    return (
        <div className='w-[100%] p-8 text-xl justify-center flex text-black border-2'>
            <div className='flex justify-center w-[95%] text-2xl'>
                <div className=' w-[90%] flex justify-between items-center'>
                    <div className='w-[60px]'>
                        <img className=' w-[100%] shadow-xl' src="cropped.jpeg" alt="" />
                    </div>

                    <ul className='hidden w-[80%] space-x-20 lg:flex'>
                        <li>About</li>
                        <li>Design</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='w-[300px] flex justify-center items-center rounded-xl bg-white text-[#6AC06D] shadow-xl'>
                    <a className='w-[100%] text-center' href="https://vrdemo.utecbuild.com/1056568/">3D Model</a>
                </div>

            </div>

        </div>
    )
}


