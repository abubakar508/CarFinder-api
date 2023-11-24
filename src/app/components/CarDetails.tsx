"use client";
import React, { useState } from 'react'

//import Types
import { carProps } from '../../../Types'


//import icons
import { BiX } from 'react-icons/bi'
import { AiFillThunderbolt} from 'react-icons/ai'

//import components
import CustomButton from './CustomButton';


//car details types
interface CarDetailsProps {
    closeModal?: () => void
    car: carProps
}
const CarDetails = ({ closeModal, car} : CarDetailsProps) => {

    //Javascript state hook for modal opening and closing (useState snippet)
    const [modal, setModal] = useState(false);

    //destructuring car prop
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
    <div className=' z-50 bg-black/80 inset-0 transition-all ease-in-out duration-150 delay-100 fixed flex items-center justify-center'>
        <div className=' absolute md:left-3 md:top-3 top-0 left-0 text-3xl text-white bg-blue-600 p-2 rounded-full w-fit' onClick={closeModal}>
            <BiX />
        </div>
        <div className=' rounded-lg bg-white p-2 w-[400px]'>
            <div className=' justify-between p-2 flex items-center'>
            <span className=' font-bold tracking-widest'>
                {year}
            </span>
            <span className=' uppercase font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>
                {make}
            </span>
            <span className=' capitalize font-bold italic text-neutral-500'>
                {model}
            </span>
            </div>
            <div className=' w-full h-[2px] bg-gradient-to-r from-orange-500 via-purple-500 to-emerald-500 my-3' />
            <div className=' text-center flex items-center justify-center capitalize font-bold underline'>
            <h1>Details</h1>
            </div>
            <div>
                {Object.entries(car).map(([key, value]) => {
                    return (
                        <div className=' capitalize justify-between px-2 py-1 flex items-center border-b my-1'>
                            <span>
                            {key.split('_').join(" ")}
                            </span>
                            <span>
                            {value}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div>
                <CustomButton
                title='Add to Favorites'
                containerStyles=' w-full text-center flex items-center justify-center'
                //handleClick functionality for the customized reusable component
                handleClick={() => setModal(true)}
                />
            </div>
            {
modal && (
    <div className=' fixed px-1 py-3 top-2 rounded-md shadow-xl right-2 h-[100px] bg-emerald-600 border-2 border-blue-600'>
    <div className=' flex items-center justify-between px-3'>
    <h1 className=' text-white font-bold'>Favorites</h1>
    <span className=' text-2xl text-white rounded-full bg-red-600' onClick={() => setModal(false)}>
    <BiX />
    </span>
    </div>
    <div className=' flex items-center gap-2'>
        <AiFillThunderbolt className=' text-white text-xl' />
        <small className=' text-base text-white'>Succesfully added to favorites</small>
    </div>

</div>
)
            }
           
        </div>

    
    </div>
  )
}

export default CarDetails

//car details contains the extra details of a car.