import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 px-4' id='speciality'>
        <h1 className='text-2xl sm:text-3xl font-medium text-center'>Find by Speciality</h1>
        <p className='w-full sm:w-2/3 md:w-1/3 text-center text-sm sm:text-base px-2'>
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
        <div className='flex sm:justify-center gap-4 sm:gap-6 pt-5 w-full overflow-x-auto scrollbar-hide'>
            {specialityData.map((item, index) => (
                <Link
                    key={index}
                    to={`/doctors/${item.speciality}`}
                    onClick={() => scrollTo(0, 0)}
                    className='flex flex-col items-center text-xs sm:text-sm shrink-0 cursor-pointer hover:-translate-y-2 transition-all duration-300'
                >
                    <img className='w-14 sm:w-16 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu
