import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className=' w-fit font-montserrat bg-gradient-to-tr from-fuchsia-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2'>
        <h1 className=' font-extrabold text-4xl'>CarPoint</h1>
        <div className=' w-3 h-3 bg-pink-300' />
    </div>
  )
}

export default Logo