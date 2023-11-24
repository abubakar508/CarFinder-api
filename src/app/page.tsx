import React from 'react'
import { fetchCars } from '../../utils'
import CarCard from './components/CarCard';
import CustomButton from './components/CustomButton';
import Hero from './components/Hero';

const page = async () => {
  const allCars = await fetchCars();
  console.log(allCars)

  const isDataEmpty = Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div className=' font-montserrat pt-20'>
      <Hero />
      <div>
      <div className=' bg-gradient-to-r from-purple-600 to-blue-600 p-3 mx-4 flex justify-between items-center rounded-md mb-10'>
        <span className=' flex gap-2 text-white'>
          All Cars 
          <span className=' font-bold text-white'>({allCars.length})</span>
        </span>
        <CustomButton
        title='Add Car'
        containerStyles=' bg-black'
        />

      </div>
        {!isDataEmpty ? (
          <div className=' text-xl mx-4 md:text-2xl font-bold text-red-500'>
            <h1>Sorry, we have no cars.Come back later</h1>
          </div>
        ) : (
          <div>
           <h1 className=' text-lg mx-4 md:text-xl font-bold text-emerald-600'>
            Yay! We have car information!
           </h1>
          </div>
        )}
      </div>
     
      <div>
        {allCars.map((car : any, index: number) => {
          return (
            <CarCard car={car} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default page