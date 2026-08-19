import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
    return (
        <div>
            {/* ========= Left Side ========= */}
            <div>
                <p>
                    Book Appointment <br />
                    With Trusted Doctors
                </p>
                <div>
                    <img src={assets.group_profiles} alt="" />
                    <p>
                        Simply browse through our extensive list of trusted doctors, <br />
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="">
                    Book Appointment <img src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* ========= Right Side ========= */}
            <div>
            <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default HeroSection