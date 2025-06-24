import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import Testmon1 from  '../../assets/meet2.png'
import Testmon2 from  '../../assets/meet1.jpg'
import Testmon3 from  '../../assets/meet4.jpg'



const Testimonials = () => {

   


  return (
    <div id='Testimonials' className='bg-slate-950 text-white w-full'>
        <div>
             <h1 data-aos="fade-up" className='text-center p-5 font-bold'>Clint Testimonials</h1>
            <div data-aos='zoom-in'>
                    <div className='flex  flex-wrap justify-center items-center gap-5 px-2 py-5' >
                        {/* Card-1 */}
                        <div className='w-[90%] md:w-[30%] bg-black px-4 py-3 flex flex-col gap-3'>
                              {/* start rating */}
                            <div className='w-full flex  gap-1'>
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                            </div>
                             {/* details Card */}
                            <div>
                              <p>"CodiX delivered beyond our expectations. Their team's expertise and professionalism are outstanding." </p>
                            </div>
                            <div className='flex  items-center  '>
                                <img className='w-[50px] h-[50px] rounded-full m-2' src={Testmon1} alt="" />
                                <div className='mt-3 '>
                                    <h6 className='text-sm '>John Smith</h6>
                                    <p className='text-sm '>CEO, TechStart</p>
                                </div>
                            </div>
                        </div>
                          {/* Card-2 */}
                        <div className='w-[90%] md:w-[30%] bg-black px-4 py-3 flex flex-col gap-3'>
                              {/* start rating */}
                            <div className='w-full flex  gap-1'>
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                            </div>
                             {/* details Card */}
                            <div>
                              <p>"The most reliable development partner we've worked with. They truly understand our business needs." </p>
                            </div>
                            <div className='flex  items-center  '>
                                <img className='w-[50px] h-[50px] rounded-full m-2' src={Testmon2} alt="" />
                                <div className='mt-3 '>
                                    <h6 className='text-sm '>Lisa Chen</h6>
                                    <p className='text-sm '>CTO, Innovation Labs</p>
                                </div>
                            </div>
                        </div>
                          {/* Card-3 */}
                        <div className='w-[90%] md:w-[30%] bg-black px-4 py-3 flex flex-col gap-3'>
                              {/* start rating */}
                            <div className='w-full flex  gap-1'>
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                               <FaStar className='text-yellow-400' />
                            </div>
                             {/* details Card */}
                            <div>
                              <p>"Exceptional service and technical expertise. They helped us transform our digital presencewith innovation and scalability."  </p>
                            </div>
                            <div className='flex  items-center  '>
                                <img className='w-[50px] h-[50px] rounded-full m-2' src={Testmon3} alt="" />
                                <div className='mt-3 '>
                                    <h6 className='text-sm '>Mike Johnson  </h6>
                                    <p className='text-sm '>Director, Digital Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>   
            </div>
        </div>
    </div>
  )
}

export default Testimonials