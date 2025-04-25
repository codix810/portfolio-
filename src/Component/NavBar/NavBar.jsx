import React, { useState } from 'react'
import { Button } from 'react-bootstrap'; 
import { FaBars, FaTimes } from 'react-icons/fa';



const NavBar = () => {
   
  const [menuOpen,setmenuopen] = useState(false);

  const toggleMenu = () => {
    setmenuopen(!menuOpen);
  };

  return (
    
    <div className="bg-black/80 text-white w-full  fixed top-0 left-0 z-50 mt-0">
        <div className="flex justify-between items-center   px-3 py-2 md:py-1">
           {/* ------Logo------ */}
            <div >
                <h1 className='font-bold m-1 text-4xl cursor-pointer  '>Tech<span className='text-blue-500'>Forge</span></h1>
            </div>
            {/* ------Likes------ */}
            <div className='hidden md:flex gap-6 font-bold'>
              <a href="#Services" className="text-white no-underline hover:translate-y-[-5px] duration-400">Services</a>
              <a href="#Expert" className="text-white no-underline hover:translate-y-[-5px] duration-400 ">About</a>
              <a href="#Projcts" className="text-white no-underline hover:translate-y-[-5px] duration-400">Portfolio</a>
              <a href="#Testimonials" className="text-white no-underline hover:translate-y-[-5px] duration-400">Testimonials</a>
              <a href="#Contact" className="text-white no-underline hover:translate-y-[-5px] duration-400">Contact</a>
            </div>
              {/* ------Button------ */}
            <div className='p-1 mt-2 hidden md:block  '>
              <Button variant="primary" >Get Started</Button>
            </div>

            {/* ------Responsive-icon ------ */}
            <div className='md:hidden '>
              <button onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            
        </div>

         {/* ------COntent-Menuo ------ */} 
        { menuOpen && (
              <div className='flex flex-col  items-center gap-4 font-bold pb-4 md:hidden'>
                <a href="#" className="text-white no-underline hover:translate-y-[-5px] duration-400">Services</a>
                <a href="#" className="text-white no-underline hover:translate-y-[-5px] duration-400 ">About</a>
                <a href="#" className="text-white no-underline hover:translate-y-[-5px] duration-400">Portfolio</a>
                <a href="#" className="text-white no-underline hover:translate-y-[-5px] duration-400">Testimonials</a>
                <a href="#" className="text-white no-underline hover:translate-y-[-5px] duration-400">Contact</a>
                <Button variant="primary" >Get Started</Button>
              </div>
        )}

    </div>
  )
}

export default NavBar