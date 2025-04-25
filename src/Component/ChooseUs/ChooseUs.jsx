import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className='bg-black text-white w-full'>
        <div>
            {/* titel-section */}
            <h1 data-aos="fade-up" className='text-center p-5 font-bold'>Why Choose Us</h1>
              {/* Body section   */}
            <div className='flex flex-wrap justify-center items-center gap-5 pb-5 px-3 text-center' >
                {/* Part-1 */}
                <div className='flex flex-col justify-center items-center '>
                    <FaShieldAlt  data-aos="fade-up" size={50}  color="blue" />
                    <h3 data-aos="fade-up">Quality Assured </h3>
                    <p data-aos="fade-up">Rigorous testing and quality control processes </p>
                </div>
                {/* Part-2 */}
                <div className='flex flex-col justify-center items-center '>
                    <FaCheckCircle data-aos="fade-up" size={50}  color="blue"/>
                    <h3 data-aos="fade-up">Security First</h3>
                    <p data-aos="fade-up">Enterprise-grade security in every solution we deliver</p>
                </div>
                {/* Part-3 */}
                <div className='flex flex-col justify-center items-center '>
                    <FaRocket  data-aos="fade-up" size={50}  color="blue" />
                    <h3 data-aos="fade-up">Innovation Driven </h3>
                    <p data-aos="fade-up">Cutting-edge technologies and modern approaches</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChooseUs