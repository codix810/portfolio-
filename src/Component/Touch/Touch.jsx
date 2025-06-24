import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Touch = () => {

    const [formData , setFormData]= useState({
        name:'',
        email:'',
        massage:''
    });

    const handleChange = (e)=>{
        const{name,value}= e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData))
        setFormData({name: "", email: "", message: ""});
        alert('Will contact you ! ✅');
    }


  return (
    <div id='Contact' className='bg-black text-white w-full border-b  border-white/20'>
        <div >
            {/* title section  */}
           <h1 data-aos="fade-up" className='text-center p-5 font-bold'>Git in Touch</h1>
            {/* body */}
            <div className='flex flex-col md:flex-row  '>
                {/* Form */}
                <div data-aos='zoom-in' className='w-[95%] p-2 md:w-[48%] px-2 md:px-5  py-5 '>
                    <Form onSubmit={handleSubmit}  className='bg-slate-950 p-5 rounded-[30px]'>
                        <h3 className="mb-3 ">Send Us a Message</h3>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label> Name</Form.Label>
                            <Form.Control type="text" name='name' onChange={handleChange} className='bg-black text-white'  />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" name='email'  onChange={handleChange}  className='bg-black text-white'  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name='massage' rows={3}  onChange={handleChange}   className='bg-black text-white' />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-3 w-full py-2 '>
                        Send Message
                        </Button>
                    </Form>
                </div>
                {/* -----Contact Information -----*/}
                <div className=' w-[95%]   flex flex-col gap-2 md:w-[38%] px-5  py-5'>
                    <h3 data-aos="fade-up" className='mb-3'>Contact Information </h3>
                    <div className='flex  flex-row gap-2'>
                        <CiLocationOn data-aos="fade-up" size={30} color="blue"/>
                        <p data-aos="fade-up">Egypt/Assuit</p>
                    </div>
                    <div className='flex  flex-row gap-2'>
                        <MdOutlineMail data-aos="fade-up" size={25}  color="blue"/>
                        <p data-aos="fade-up">codix810@gmail.com</p>
                    </div>
                    <div className='flex  flex-row gap-2'>
                        <LuPhone data-aos="fade-up" size={25}  color="blue"/>
                        <p data-aos="fade-up">+201001514586</p>
                        <p data-aos="fade-up">& +201010721434</p>{/* هنا انت ضيف رقمك*/}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Touch
