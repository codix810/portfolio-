import React from 'react'
import NavBar from './Component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Component/Services/Services';
import Expert from './Component/Expert/Expert';
import Cards from './Component/Cards/Cards';
import ChooseUs from './Component/ChooseUs/ChooseUs';
import Testimonials from './Component/Testimonials/Testimonials';
import Touch from './Component/Touch/Touch';
import ContactForm from './Component/ContactForm';
import Footer from './Component/Footer/Footer';
import ScrollToTopButton from './Component/ScrollToTopButton/ScrollToTopButton';


const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  }, []);

  



  return (
    <div className='scroll-smooth flex flex-col min-h-screen'>
      <NavBar/>
      <Header/>
      <Services/>
      <Expert/>
      <Cards/>
      <ChooseUs/>
      <Testimonials/>
      <Touch/>
      <ContactForm/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App



















 
