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
    <div className='w-[100%] flex justify-center bg-[#72C367]'>
        <div className='w-[70%] flex flex-col justify-between'>
            <h1 className='text-6xl z-10 mb-6'>Last 24 hours</h1>
            <div className='flex flex-wrap justify-around w-[100%]'>
                <Card head="Solar Energy Produced" bgColor="#ffc9339c" />
                <Card head="Energy Consumption" bgColor="#ffc9339c" />
                <Card head="Fresh Water Consumption" bgColor="#2AB0B6"/>
                <Card head="Recycled Water Consumption" bgColor="#2AB0B6" />
                <Card head="Carbon Footprint Sequestered" bgColor="#ffc9339c" />
            </div>
        </div>
        
    </div>
  )
}
