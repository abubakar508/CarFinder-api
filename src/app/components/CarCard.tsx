'use client';

//import react & usestate hook
import React, { useState } from 'react'

//import type
import { carProps } from '../../../Types'

//import components
import CustomButton from './CustomButton'
import CarDetails from './CarDetails';

//import icons
import { BsCarFrontFill } from 'react-icons/bs'
import { MdGasMeter,} from 'react-icons/md'
import { AiOutlineRightSquare} from 'react-icons/ai'


//type declaration for the carcardprops
interface CarCardProps {
    car : carProps
}
const CarCard = ({ car } : CarCardProps) => {

//handling the click functionality
const [isOpen, setIsOpen] = useState(false)


//Array destructuring
    const { city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        transmission,
        model,
        year,} = car
  return (
    <div className=' group hover:shadow-lg rounded-md border m-2 md:m-4 px-4 py-5 bg-emerald-600 h-[350px] mt-10'>
        <div>
        <section className=' flex items-start md:p-3 justify-between'>
        <div className=' flex flex-col gap-2 items-start'>
        <h1 className=' text-xl md:text-2xl uppercase font-bold text-white'>
            Make: {make}
        </h1>
        <span className=' text-white font-normal capitalize'>
            Model: {model}
        </span>
        <span className=' text-white font-bold'>
            Year: {year}
        </span>
        </div>
        <div>   
            <CustomButton 
            title='View More'
             icon={<AiOutlineRightSquare />}
             handleClick={() => setIsOpen(true)}
             />
            <div className=' justify-between p-4 text-white flex'>
            <div className=' flex flex-col gap-2 items-center text-neutral-300 justify-center font-bold text-[12px]'>
                <MdGasMeter />
                {fuel_type}
            </div>
            <div className=' flex flex-col gap-2 items-center text-neutral-300 justify-center font-bold text-[12px] text--500'>
                <BsCarFrontFill />
                {drive.toUpperCase()}
            </div>
            </div>
        </div>
        </section>
        <div className=' text-white'>
            <h1 className=' font-bold capitalize text-neutral-200 underline'>Toyota Overview</h1>
            <div className=' md:w-2/4'>
            <small className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, blanditiis porro minus illo optio repudiandae, est dolores voluptate, quae consequatur modi omnis officia id dolorum non facilis. Dicta, assumenda rerum!</small>
            </div>
        </div>
        </div>
        {isOpen && (
            <CarDetails car={car} closeModal={() => setIsOpen(false)} />
        )}
       
    </div>
  )
}

export default CarCard