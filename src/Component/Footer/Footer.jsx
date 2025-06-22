import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div  className='bg-black w-full min-h-[auto] text-white   '>
        <div data-aos='zoom-in' className='flex justify-between gap-2  flex-wrap md:px-[100px] px-[70px] py-5  '>
            {/* logo */}
            <div>
                <h1 className='font-bold m-1 text-3xl cursor-pointer mb-2 '>Codi<span className='text-blue-500'>X</span></h1>
                <p className='text-white/50'>Transforming businesses through <br /> innovative digital solutions.  </p>
            </div>
            {/* Services */}
            <div>
                <p className='font-bold '>Services </p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Website Development</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Mobile Apps</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Web Applications</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Digital Marketing </p>
            </div>
            {/* Company */}
            <div>
                <p className='font-bold '>Company </p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>About Us</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Our Team</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Careers</p>
                <p className='text-white/50 hover:text-blue-700 cursor-pointer hover:translate-x-1 duration-300 '>Contact</p>
            </div>
            {/* Follow US */}
            <div>
              <p className='font-bold '>Follow US </p>
              <div className='flex gap-3'>
               <TiSocialTwitter className='text-white hover:text-blue-700 cursor-pointer hover:-translate-y-2 transition-transform duration-300' size={22} />
                <a href="https://www.linkedin.com/in/codi-x-969178371?">
                    <FaLinkedin  className='text-white hover:text-blue-700 cursor-pointer hover:-translate-y-2 transition-transform duration-300' size={22} color='white'/>
                 </a>
                  <a href="https://github.com/codix810">
                    <FaGithub  className='text-white hover:text-blue-700 cursor-pointer hover:-translate-y-2 transition-transform duration-300' size={22} color='white'/>
                 </a>
              </div>
            </div>
        </div>
        <p className='text-white/50  text-center py-[20px]'>&copy; 2024 CodiX. All rights reserved.</p>
    </div>
  )
}

export default Footer
