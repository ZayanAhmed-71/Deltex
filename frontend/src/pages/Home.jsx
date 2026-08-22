import React from 'react'
import HeroSection from '../Component/HeroSection'
import SpecialityMenu from '../Component/SpecialityMenu'
import TopDoctors from '../Component/TopDoctors'
import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home