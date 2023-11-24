"use client";
import React, { useEffect, useState } from 'react'

//import components
import Logo from './Logo'


//FooterData from constants
import { FooterData } from '../constants'

const NavBar = () => {

  const [header, setHeader] = useState(false)
  useEffect(() => {

const handleScroll = () => {

  if (window.scrollY > 100) {

    setHeader(true)

  } else {

    setHeader(false)

  }
};

//Add event listener
window.addEventListener('scroll', handleScroll);

//remove event listener
return () => {
  window.removeEventListener('scroll', handleScroll)

}
})



   return (
    <nav className={`fixed z-40 w-full flex items-center justify-between px-2 py-4 ${ header ? ' bg-gradient-to-br text-white  from-black to-blue-600 transition-all ease-in-out duration-300 py-3' : ''}`}>
      <div>
        <Logo />
      </div>
      <div className={` hidden md:flex gap-3 ${ header ? ' text-white' : ''}`} >
        <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[0]}
        </span>
        <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[1]}
        </span>
          <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[2]}</span>
        <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[3]}
        </span>
        <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[4]}
        </span>
        <span className=' text-xl hover:text-blue-600 cursor-pointer '>
        {FooterData[0].link[5]}
        </span>
      </div>
    </nav>
  )
}

export default NavBar


//A simple navigation bar here.