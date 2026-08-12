import React from 'react'
import { Routes, Route, NavLink, useNavigate} from 'react-router'

import {assets} from '../assets/assets'

const Navber = () => {
 
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1'>All Doctor</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1'>About us</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>Contract</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>
        </ul>

        <div>
          <button onClick={()=>navigate('/login')} className='bg-blue-400 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        </div>
    </div>
  )
}

export default Navber