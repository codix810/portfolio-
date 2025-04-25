import React from 'react'
import Card from 'react-bootstrap/Card';
import Ecommerce from '../../assets/E-commerce.avif';
import Healthcare from '../../assets/Healthcare.jpg';
import Fitness from '../../assets/Fitness.webp';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Cards = () => {
  return (
    <div id='Projcts' className='bg-slate-950 text-white w-full '>
      <div >
        {/* titel-section */}
        <h1 data-aos="fade-up" className='text-center p-5 font-bold'>Featured Projects</h1>
        <div className='border-none outline-none px-5 flex items-center flex-wrap justify-center gap-[80px]  '>
          {/* Card-1 */}
          <Card data-aos="fade-up" className='bg-black mb-5 ' style={{ width: '22rem' }}>
            <Card.Img variant="top"  src={Ecommerce} />
            <Card.Body>
              <Card.Title className='text-white '>E-commerce Platform</Card.Title>
                  <div class="px-2 pt-1 pb-1">
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">React </span>
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">Node.js</span>
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">MongoDB</span>
                    </div>
              <Card.Text className='text-white '>
                Modern e-commerce solution with advanced 
              </Card.Text>
               <div className='flex items-center px-1  '>
                  <a href="#" className="text-blue-500 no-underline hover:underline">View Case Study </a>
                  <HiOutlineArrowSmRight  size={22}  color="blue"/>
                </div>
              
            </Card.Body>
          </Card>
          {/* Card-2 */}
          <Card data-aos="fade-up" className='bg-black mb-5  ' style={{ width: '22rem' }}>
            <Card.Img variant="top"  src={Healthcare} />
            <Card.Body>
              <Card.Title className='text-white '>Healthcare Dashboard</Card.Title>
                  <div class="px-2 pt-1 pb-1">
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">Vue </span>
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">Python</span>
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">PostgreSQL</span>
                    </div>
              <Card.Text className='text-white '>
              Analytics dashboard for healthcare providers
              </Card.Text>
               <div className='flex items-center px-1  '>
                  <a href="#" className="text-blue-500 no-underline hover:underline">View Case Study </a>
                  <HiOutlineArrowSmRight  size={22}  color="blue"/>
                </div>
              
            </Card.Body>
          </Card>
          {/* Card-3 */}
          <Card data-aos="fade-up" className='bg-black mb-5 ' style={{ width: '22rem' }}>
            <Card.Img variant="top"  src={Fitness} />
            <Card.Body>
              <Card.Title className='text-white '>Fitness APP</Card.Title>
                  <div class="px-2 pt-1 pb-1">
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">React Native </span>
                     <span class="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">Firebase</span>
                    </div>
              <Card.Text className='text-white '>
               Cross-platform mobile fitness tracking app
              </Card.Text>
               <div className='flex items-center px-1  '>
                  <a href="#" className="text-blue-500 no-underline hover:underline">View Case Study </a>
                  <HiOutlineArrowSmRight  size={22}  color="blue"/>
                </div>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Cards