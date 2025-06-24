import React from 'react'
import Mahmoud from '../../assets/WhatsApp_Image_2025-06-24_at_03.30.37_e545f54f-removebg-preview.png'
import Mohamed from '../../assets/WhatsApp_Image_2025-06-24_at_03.36.50_4a8a745c-removebg-preview.png'
import David from '../../assets/meet2.png'
import Emma from '../../assets/meet1.jpg'

const Expert = () => {
  return (
    <div id='Expert'>
        <div className='bg-black'>
          {/* ------title------ */}
            <h1 data-aos="fade-up" className='text-center text-white p-5 font-bold'> Meet Our Expert </h1>

            {/* ------Img-&-Details------ */}
            <div className=' flex justify-around   flex-wrap pb-[50px] gap-3'>
               {/* ------Img-&-Details-1------ */}
               <div className=" text-white font-semibold m-3 p-4 w-[280px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 flex flex-col items-center">
                    <img data-aos="fade-up" src={Mahmoud} alt="Sarah Chen" className="w-[190px] h-[190px] rounded-full object-cover border-3 border-blue-600 bg-slate-500 shadow-md"/>
                    <h5 data-aos="fade-up" className="text-xl mt-4 text-center font-bold text-white" >Mahmoud Ali </h5>
                    <p data-aos="fade-up" className="text-blue-400 text-sm mt-1 mb-3 text-center">Backend Lead</p>
                    <ul data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mt-2">
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        Node.js
                        </li>
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        Express
                        </li>
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        MongoDB
                        </li>
                    </ul>
                </div>
                {/* ------Img-&-Details-2------ */}
               <div className=" text-white font-semibold m-3 p-4 w-[280px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 flex flex-col items-center">
                    <img data-aos="fade-up" src={Mohamed} alt="Sarah Chen" className="w-[190px] h-[190px] rounded-full object-cover border-3 border-blue-600 bg-slate-500 shadow-md"/>
                    <h5 data-aos="fade-up" className="text-xl mt-4 text-center font-bold text-white" >Mohamed Mostafa </h5>
                    <p data-aos="fade-up" className="text-blue-400 text-sm mt-1 mb-3 text-center">Frontend Lead</p>
                    <ul data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mt-2">
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        React.js
                        </li>
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        Next.js
                        </li>
                        <li className="bg-gray-700 hover:bg-blue-600 px-4 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer">
                        TypeScript
                        </li>
                    </ul>
                </div>

                {/* ------Img-&-Details-3------ */}
              
                 {/* ------Img-&-Details-4------ */}
               
            </div>
        </div>
    </div>
  )
}

export default Expert