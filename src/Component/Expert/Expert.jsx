import React from 'react'
import Alex from '../../assets/meet4.jpg'
import Sarah from '../../assets/meet3.png'
import David from '../../assets/meet2.png'
import Emma from '../../assets/meet1.jpg'

const Expert = () => {
  return (
    <div id='Expert'>
        <div className='bg-black'>
          {/* ------title------ */}
            <h1 data-aos="fade-up" className='text-center text-white p-5 font-bold'> Meet Our Expert </h1>

            {/* ------Img-&-Details------ */}
            <div className=' flex justify-center flex-wrap gap-4'>
            {/* ------Img-&-Details-1------ */}
                <div className='text-white font-bold m-3 p-2 W-[24%] flex flex-col'>
                    <img data-aos="fade-up" src={Alex} className='w-[180px] h-[180px] rounded-[50%] ' />
                    <h5 data-aos="fade-up" className='text-center mt-2' >Alex Morgan</h5>
                    <p data-aos="fade-up" className='text-blue-700 text-sm text-center'>Frontend Lead</p>
                    <ul className='flex gap-2  text-center '>
                        <li data-aos="fade-up" className='bg-gray-900 w-[50px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>React</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[40px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Vue</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[50px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>UI/UX</li>
                    </ul>
                </div>
                {/* ------Img-&-Details-2------ */}
                <div className='text-white font-bold m-3 p-2 W-[24%] flex flex-col'>
                    <img data-aos="fade-up" src={Sarah} className='w-[180px] h-[180px] rounded-[50%]  ' />
                    <h5 data-aos="fade-up" className='text-center mt-2' >Sarah Chen </h5>
                    <p data-aos="fade-up" className='text-blue-700 text-sm text-center'>Backend Developer</p>
                    <ul data-aos="fade-up" className='flex gap-2 text-center'>
                        <li data-aos="fade-up" className='bg-gray-900 w-[60px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Node.js</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[60px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Python</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[50px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>AWS</li>
                    </ul>
                </div>
                {/* ------Img-&-Details-3------ */}
                <div className='text-white font-bold m-3 p-2 W-[24%] flex flex-col'>
                    <img data-aos="fade-up" src={David} className='w-[180px] h-[180px] rounded-[50%] ' />
                    <h5 data-aos="fade-up" className='text-center mt-2' >David Kim</h5>
                    <p data-aos="fade-up" className='text-blue-700 text-sm text-center'>Security Epert</p>
                    <ul data-aos="fade-up" className='flex gap-2  text-center '>
                        <li data-aos="fade-up" className='bg-gray-900 w-[100px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Cybersecurity</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[60px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>DevOps</li>
                    </ul>
                </div>
                 {/* ------Img-&-Details-4------ */}
                 <div className='text-white font-bold m-3 p-2 W-[24%] flex flex-col'>
                    <img data-aos="fade-up" src={Emma} className='w-[180px] h-[180px] rounded-[50%] ' />
                    <h5 data-aos="fade-up" className='text-center mt-2' >Emma Wilson</h5>
                    <p data-aos="fade-up" className='text-blue-700 text-sm text-center '>Digital Marketer</p>
                    <ul data-aos="fade-up" className='flex gap-2  text-center'>
                        <li data-aos="fade-up" className='bg-gray-900 w-[40px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>SEO</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[65px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Analyics</li>
                        <li data-aos="fade-up" className='bg-gray-900 w-[60px] p-1 text-sm cursor-pointer text-center rounded-[20px]'>Content</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Expert