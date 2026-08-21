import React from 'react'
import HeroSection from '../Component/HeroSection'
import SpecialityMenu from '../Component/SpecialityMenu'
import TopDoctors from '../Component/TopDoctors'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SpecialityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default Home