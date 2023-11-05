import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLink} from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#74C365]'>
        <div className='w-[80%] m-20 flex rounded-2xl '>
            
            <div className='w-[35%] flex flex-col justify-between h-[100%] text-white'>
                <h1 className='w-[60%] mb-4 flex text-4xl'>Contacts</h1>
                <div className='w-[100%] h-[70%] flex flex-col space-y-8'>
                <div className='flex w-[60%] text-2xl'>
                    <FontAwesomeIcon icon={faPhone} className="fas fa-phone" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>+91-989-9979-893</p>
                </div>
                <div className='flex w-[60%] text-2xl'>
                    <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>johndoe@gmail.com</p>
                </div>
                <div className='flex w-[60%] text-2xl'>
                    <FontAwesomeIcon icon={faLink} className="fas fa-link" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>LinkedIn</p>
                </div>
                <div className='flex w-[60%] text-2xl'>
                    <FontAwesomeIcon icon={faLink} className="fas fa-link" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>Instagram</p>
                </div>
                </div>
               
            </div>
            <div className='w-[65%]'>
                <h1 className='mb-6 text-4xl'>Write to us</h1>
                <div className='w-[100%]'>
                    <form action="" className='w-[100%] flex flex-col justify-around space-y-4'>
                        <div className='w-[100%] flex justify-between'>
                            <input  placeholder='First Name' className='border-2' type="text" />
                            <input placeholder='Last Name' className='border-2' type="text" />
                        </div>
                        <div className='flex justify-between'>
                            <input placeholder='E-Mail' className='border-2' type="email" />
                            <input placeholder='Mobile Number' className='border-2' type="email" />
                        </div>
                        <div>
                            <textarea name="" className='w-[100%] p-4'  placeholder='Your Message' id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className='bg-[#2AB0B6] p-4 w-[100px]'>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
