import React from 'react'
import Button from 'react-bootstrap/Button';
import Img from '../../assets/Header-img.jpg';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';




const Header = () => {
  return (
    <div id='Header' className='bg-black text-white w-full h-[750px] flex  items-center md:h-[500px]  '>
        <div className='flex flex-col md:flex-row m-5 gap-[20px] md:gap-[200px]  pt-[70px] '>
            {/* -----Titel-Header----- */}
            <div className='mt-[50px]  ' >
                <h1  data-aos="fade-up"><span className='text-blue-500'>Transform</span> Your Digital <br /> Vision Into <span className='text-blue-500'>
                   <Typewriter
                    loop
                    cursor
                    cursorStyle="|" 
                    typeSpeed={150}
                    deleteSpeed={100} 
                    delaySpeed={1000} 
                    words={[ 'Reality ' ,'Success ','Impact ']}
                      
                       /> </span>  </h1>
                <p  data-aos="fade-up" className='mr-[50px] mx-auto  my-4'>
                Full-stack development solutions for modern businesses. We bulld scalable, <br />
                secure, and innovative digital experiences.
                </p>
                <div   data-aos="fade-up" className='flex gap-4'>
                 <Button variant="primary" >Let's Buld Together </Button>
                 <Button variant="outline-primary"><a href="#" className='no-underline  text-white '>View Portfolio</a></Button>
                </div>
            </div>

             {/* -----img-Header----- */}
            <div className='  flex justify-center items-center md:w-1/2   '>
                
                    <img src={Img}  data-aos="zoom-in " className='rounded-lg '/>
                
            </div>
        </div>

    </div>
  )
}

export default Header