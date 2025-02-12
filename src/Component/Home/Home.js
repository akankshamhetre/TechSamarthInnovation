// src/Component/Home/Home.js
import React from 'react';
import './Home.css';
import ProjectsSlider from '../ProjectsSlider/ProjectsSlider';
import Hero from '../Hero/Hero';
import Team from '../Team/Team';
import HappyCustomer from '../HappyCustomer/HappyCustomer';
import FAQ from '../FAQ/FAQ';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home-container">
            
            <Hero />
            <hr className="horizontal-line" />
            <div><ProjectsSlider /></div><br></br>
            <button className="explore-button" onClick={() => window.location.href = '/services'}>Explore More</button>
            <hr className="horizontal-line" />

            <Team />
            <hr className="horizontal-line" />
            <FAQ />
            <HappyCustomer />
            
          <ContactUs/>
            <Footer />
        </div>
    );
};

export default Home;
