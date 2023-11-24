import React from 'react'


//importing props data & Typescript data
import { CustomButtonProps } from '../../../Types'


const CustomButton = ({title, icon, containerStyles, handleClick} : CustomButtonProps) => {
  return (
    <button className={`font-montserrat md:px-8 md:py-3 px-3 py-2 text-white bg-blue-600 rounded-full hover:bg-gradient-to-l from-blue-600 to-black/40 shadow-lg flex gap-2 items-center ${containerStyles}`}
    onClick={handleClick}
    >
        {title}
        {icon}
    </button>
  )
}

export default CustomButton