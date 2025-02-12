// src/Component/ProjectsSlider/ProjectsSlider.js
import React, { useState, useEffect } from 'react';
import './ProjectsSlider.css';
import WebsiteImg1 from '../../Img/WebsiteImg1.jpg';
import WebsiteImg2 from '../../Img/WebsiteImg2.jpg';
import WebsiteImg3 from '../../Img/WebsiteImg3.jpg';

const ProjectsSlider = () => {
    const images = [WebsiteImg1, WebsiteImg2, WebsiteImg3,WebsiteImg1, WebsiteImg2, WebsiteImg3]; // Add more images as needed

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds (adjust as needed)

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="projects-slider">
            <div className="slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSlider;
