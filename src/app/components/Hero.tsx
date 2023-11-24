import React from 'react'

//import icons
import { BsCarFrontFill } from 'react-icons/bs'

//import conmponents
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row items-center gap-3 justify-between my-4 mx-2'>
        <div className=' flex flex-col px-3 gap-3'>
            <h1 className=' text-[28px] md:text-[64px] xl:text-[72px]'>
                Find your best car brand and its information - quickly & easily!
            </h1>
            <small className=' md:text-2xl'>Streamline your searching experienced with our optimized application and up-to-date car data.</small>
            <CustomButton
             title='Explore'
             containerStyles=' w-fit px-10'
             />
        </div>
        <div className=' text-[20rem] md:text-[22rem] lg:text-[35rem] bg-gradient-to-br from-fuchsia-600 via-emerald-600 to-purple-600 p-3 rounded-md text-black'>
            <BsCarFrontFill className="drop-shadow-lg " />
        </div>
    </div>
  )
}

export default Hero