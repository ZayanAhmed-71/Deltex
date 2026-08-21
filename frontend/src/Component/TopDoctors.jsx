import React from 'react'
import { useNavigate } from 'react-router-dom'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 px-4'>
            <h1 className='text-2xl sm:text-3xl font-medium text-center'>Top Doctors to Book</h1>
            <p className='w-full sm:w-2/3 md:w-1/3 text-center text-sm sm:text-base px-2'>
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300'
                    >
                        <img className='w-full h-auto bg-blue-50' src={item.image} alt="" />
                        <div className='p-3 sm:p-4'>
                            <div className='flex items-center gap-2 text-xs sm:text-sm text-center'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p className='text-green-500'>Available</p>
                            </div>
                            <p className='text-gray-900 text-sm sm:text-base font-medium mt-1'>{item.name}</p>
                            <p className='text-gray-600 text-xs sm:text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='bg-blue-50 text-gray-600 px-8 sm:px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all duration-300'
            >
                More
            </button>
        </div>
    )
}

export default TopDoctors