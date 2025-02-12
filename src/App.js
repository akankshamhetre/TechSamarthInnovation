import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import ScrollButton from './Component/ScrollButton/ScrollButton';
import Portfolio from './Component/Services/Portfolio/Portfolio';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />

            </Routes>
            <Footer />
            <ScrollButton />
        </Router>
    );
}

export default App;
