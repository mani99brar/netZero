import React from 'react'
import { useState } from 'react'
import { Card } from './Card';


export const Stats = () => {
    const [solarEnergy,setSolarEnergy] = useState(0); 
    const [dailyEnergy,setDailyEnergy] = useState(0); 
    const [freshWater,setFreshWater] = useState(0); 
    const [recycledWater,setRecycledWater] = useState(0); 
    const [carbonFootprint,setCarbonFootprint] = useState(0); 
  return (
    <div className='w-[100%] flex justify-center bg-[#72C367] '>
        <div className='lg:w-[80%] w-[90%] flex flex-col justify-between items-center mb-64'>
            <h1 className='bg-white w-[100%] rounded-lg px-4 py-2 text-[#74C365] mb-20 lg:mt-40 mt-20 text-center lg:text-6xl text-4xl shadow-2xl shadow-green'>Last 24 hours</h1>
            <div className='flex flex-wrap justify-around lg:w-[100%] w-[90%] items-center'>
                <Card head="Solar Energy Produced" bgColor="#ffc9339c" img="solar.png" />
                <Card head="Energy Consumption" bgColor="#ffc9339c" img="energy.png"/>
                <Card head="Fresh Water Consumption" bgColor="#2AB0B6" img="water.png"/>
                <Card head="Recycled Water Consumption" bgColor="#2AB0B6" img="recycle.png" />
                <Card head="Carbon Footprint Sequestered" bgColor="#ffc9339c" img="carbon.png" />
            </div>
        </div>
        
    </div>
  )
}
