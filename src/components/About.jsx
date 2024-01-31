import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { Card } from './Card';
export const About = () => {
  return (
    <div className='w-[100%] flex justify-center flex-col items-center bg-[#00A9FF] yellowGradient text-black about'>
      <h1 className='bg-white text-center  lg:w-[80%] w-[90%] rounded-lg px-4 py-2 text-[#71C266] lg:mt-20 mb-20 lg:text-6xl text-4xl shadow-2xl shadow-green'>About Us</h1>
      <div className='w-[80%] flex items-center lg:flex-row flex-col'>
        <div className='lg:w-[50%] w-[100%] lg:mb-0 mb-8 flex flex-col justify-around'>

          <p className='text-xl lg:leading-10 lg:text-justify leading-6'>Built environment is responsible for 40% of global carbon emissions and “Zero Carbon buildings’’ are imperative for addressing climate change and the window of opportunity is too narrow before global warming crosses 1.5 degrees. This pilot project is prototype of how Urban Infrastructure globally should be developed thereby delivering unrivaled value to communities, environment and stakeholders. </p>
          <a href="https://www.youtube.com/watch?v=5vXzzsawrfU" className='underline underline-offset-4 text-lg'>Meet the Architect</a>
        </div>
        <div className='lg:w-[50%] w-[100%] h-[100%] flex  justify-center'>
          <div className='lg:w-[80%] w-[100%]'>
            <a href='/certificate.pdf' target="_blank" className='flex items-center w-[100%]'><span className="bg-white text-centerrounded-lg px-4 py-2 text-[#71C266] rounded-md lg:text-5xl mb-10 text-3xl shadow-2xl shadow-green">Certifiaction </span>
              <FontAwesomeIcon icon={faExternalLink} className="fas fa-link text-4xl ml-4 mb-8" ></FontAwesomeIcon>
            </a>
            <ul className='list-disc text-justify'>
              <li className='mb-2'>World Bank Certified with 88% energy efficiency and 40% water efficiency </li>
              <li className='mb-2 text-justify'>Ministry of Housing/ GIZ certified with RETV of 7 W/m² approx.</li>
            </ul>
            <p>This building is ideally a rental assets for serviced apartments, corporate, Oyo rooms, AirBnb, premium student housing etc and will suit investors who are looking for rental income property with  appreciation and corporates that are looking for Zero Carbon assets for their ESG compliance and reporting. </p>
          </div>
        </div>
      </div>
      <div className='w-[80%] flex lg:items-center items-start flex-col mt-8'>
        <h1 className="bg-white text-center rounded-lg px-4 py-2 text-[#ffc933] lg:text-5xl mb-10 text-3xl shadow-2xl shadow-green">Features</h1>
        <ul className='flex lg:justify-around lg:items-start items-center flex-wrap text-xl list-disc w-[100%] gap-8 featureUl'>
          <li className=' text-center lg:w-[40%] w-[90%]'>Solar Rooftop</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>EV Charging Station </li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Heat pump</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Thermally Comfortable building envelope (RETV= 7 W/m² approx.)</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Open Courtyard</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Water Harvesting</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Wide terrace</li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Sun Shades </li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Low SHGC glass </li>
          <li className=' text-center lg:w-[40%] w-[90%]'>Reflective paint </li>
        </ul>
      </div>

    </div>
  )
}
