import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 sm:px-10'>
            {/* ========= Left Side ========= */}
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-[8vw] text-center md:text-left'>
                <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight'>
                    Book Appointment <br />
                    With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p className='text-xs sm:text-sm'>
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <a 
                    href="#speciality"
                    className='flex items-center gap-2 bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'
                >
                    Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* ========= Right Side ========= */}
            <div className='w-full md:w-1/2 relative flex items-end justify-center'>
                <img
                    className='w-3/4 sm:w-2/3 md:w-full md:absolute md:bottom-0 h-auto rounded-lg'
                    src={assets.header_img}
                    alt=""
                />
            </div>
        </div>
    )
}

export default HeroSection