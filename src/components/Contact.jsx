import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLink} from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  return (
    <div className='w-[100%] flex justify-center pb-10 bg-[#74C365]'>
        <div className='lg:w-[80%] w-[80%] flex rounded-2xl '>
            
            <div className='w-[100%] flex flex-col justify-between h-[100%] text-white'>
                <h1 className='bg-white  rounded-lg px-4 py-2 text-[#74C365] mb-20 text-center mt-80 lg:text-6xl text-4xl shadow-2xl shadow-green'>Contacts</h1>
                <div className='w-[100%] h-[70%] flex flex-wrap justify-around items-center space-y-8'>
                <div className='flex lg:w-[45%] w-[80%] justify-center text-2xl'>
                    <FontAwesomeIcon icon={faPhone} className="fas fa-phone" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>+91-989-9979-893</p>
                </div>
                <div className='flex lg:w-[45%] w-[80%]  justify-center text-2xl'>
                    <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>johndoe@gmail.com</p>
                </div>
                <div className='flex lg:w-[45%] w-[80%]  justify-center text-2xl'>
                    <FontAwesomeIcon icon={faLink} className="fas fa-link" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>LinkedIn</p>
                </div>
                <div className='flex lg:w-[45%] w-[80%]  justify-center text-2xl'>
                    <FontAwesomeIcon icon={faLink} className="fas fa-link" style={{ color: "white" }}></FontAwesomeIcon>
                    <p className='ml-4'>Instagram</p>
                </div>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}
