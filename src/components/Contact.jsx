import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
export const Contact = () => {
    return (
        <div className='w-[100%] flex justify-center pb-10 bg-[#74C365]'>
            <div className='lg:w-[80%] lg:mt-0 mt-20 w-[90%] flex rounded-2xl '>

                <div className='w-[100%] flex flex-col justify-between h-[100%] text-white'>
                    <h1 className='bg-white  rounded-lg px-4 py-2 text-[#74C365] mb-16 text-center lg:mt-40 lg:text-6xl text-4xl shadow-2xl shadow-green'>Contacts</h1>
                    <div className='w-[100%] h-[70%] flex flex-wrap justify-around items-center border-2 pt-8 rounded-lg pb-8'>
                        <div className='text-4xl font-bold w-[80%] flex mb-2 items-center'>
                            <h1>Jaspreet Singh Brar</h1>
                            <a href="https://www.linkedin.com/in/jaspreet-singh-brar/">
                                <FontAwesomeIcon icon={faLinkedin} className="fas fa-facebook-f ml-6 shadow-xl" style={{ color: "white" }}>
                                </FontAwesomeIcon>
                            </a>
                        </div>
                        <div className='flex lg:w-[45%] w-[90%] items-center p-4 justify-center text-3xl'>
                            <FontAwesomeIcon icon={faPhone} className="fas fa-phone" style={{ color: "white" }}></FontAwesomeIcon>
                            <p className='ml-4 bg-white rounded-lg p-4 text-xl text-[#74C365]'>+91 93565 00003</p>
                        </div>
                        <div className='flex lg:w-[45%] w-[90%] items-center  justify-center text-4xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" style={{ color: "white" }}></FontAwesomeIcon>
                            <p className='ml-4 bg-white rounded-lg p-4 text-xl text-[#74C365]'>jaspreet@assurity.in</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
