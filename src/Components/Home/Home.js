import React from 'react';
import '../Home/Home.css';
import FAQSearchBar from '../FAQ/FAQSearchBar';
import AboutUs from '../AboutUs/AboutUs';
import LogInSlide from './LogInSlide';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Footer from '../Footer/Footer';


function Home() {

    return (
      <>
      <CustomNavbar/>
      <img
          className="d-block w-100 carousel-image"
          src="https://i.ibb.co/Bn0wbTC/1.jpg"
          alt="First slide"
          
        />
       
      
        <img
          className="d-block w-100 carousel-image"
          src="https://i.ibb.co/XDHkzCv/2.jpg"
          alt="Second slide"
        />
     
        <img
          className="d-block w-100 carousel-image"
          src="https://i.ibb.co/jVRtj7x/3.jpg"
          alt="Third slide"
        />
        
      
        <img
          className="d-block w-100 carousel-image"
          src="https://i.ibb.co/7WcLQrc/4.jpg"
          alt="Third slide"
        />
      
      <section id="about-us" style={{ paddingBottom: '10px', background: 'lightgray' }}>
        <AboutUs />
      </section>

<Footer/>
      </>
    );
  }
  

  export default Home;
