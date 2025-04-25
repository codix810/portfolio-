import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaChartLine } from 'react-icons/fa';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Services = () => {
  return (
    <div id='Services'>
        <div  className='bg-slate-950 text-white w-full h-[1050px] md:h-[650px]'>
                {/* ----title----- */}
            <h1 data-aos="fade-up" className='text-center py-[70px]  font-bold'>Our Services</h1>
                {/* ----card----- */}
            <div className='flex flex-wrap gap-1 '>
                <div data-aos="fade-up" className='bg-black/90 w-[95%] p-3 m-3  md:w-[45%] '>
                    <FaCode size={40}  color="blue" />
                    <h2>Website Development</h2>
                    <p>Custom websites bult madem technologies and best practices</p>
                    <div className='flex items-center  '>
                    <a href="#" className="text-blue-500 no-underline hover:underline">Leam More</a>
                    <HiOutlineArrowSmRight  size={22}  color="blue"/>
                    </div>
                </div>
                <div data-aos="fade-up" className='bg-black/100 w-[95%] p-3 m-3 md:w-[45%]'>
                    <FaMobileButton size={40}  color="blue" />
                    <h2>Mobile App Development </h2>
                    <p>Native cross-platform mobile applications   </p>
                    <div className='flex items-center  '>
                    <a href="#" className="text-blue-500 no-underline hover:underline">Leam More</a>
                    <HiOutlineArrowSmRight  size={22}  color="blue"/>
                    </div>
                </div>
                <div data-aos="fade-up" className='bg-black/100 w-[95%] p-3 m-3 md:w-[45%]'>
                    <FaChartLine size={40} color="blue " />
                    <h2>Web Applications & Dashboards </h2>
                    <p>Complex web applications with powerful analytics  </p>
                    <div className='flex items-center  '>
                    <a href="#" className="text-blue-500 no-underline hover:underline">Leam More</a>
                    <HiOutlineArrowSmRight  size={22}  color="blue"/>
                    </div>
                </div>
                <div data-aos="fade-up" className='bg-black/100 w-[95%] p-3 m-3 md:w-[45%]'>
                    <FaRocket  size={40}  color="blue" />
                    <h2>Digital Marketing   </h2>
                    <p>Strategic digital marketing solutions for growth</p>
                    <div className='flex items-center  '>
                    <a href="#" className="text-blue-500 no-underline hover:underline">Leam More</a>
                    <HiOutlineArrowSmRight  size={22}  color="blue"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services