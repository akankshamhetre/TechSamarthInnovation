import React from 'react';
import './Services.css';

const services = [
    { name: "Final Year Project", description: "Get help with your final year project.", icon: "🎓", link: "/final-year-project" },
    { name: "Mini Project", description: "Assistance with mini projects for students.", icon: "📁", link: "/mini-project" },
    { name: "Business Website", description: "Professional business website development.", icon: "💼", link: "/business-website" },
    { name: "Portfolio", description: "Create a stunning portfolio to showcase your work.", icon: "📜", link: "/portfolio" },
    { name: "Training", description: "Professional training services in various domains.", icon: "🛠️", link: "/training" },
    { name: "Internship", description: "Internship opportunities to gain practical experience.", icon: "🌟", link: "/internship" },
    { name: "Paper Publications", description: "Help with publishing research papers.", icon: "📰", link: "/paper-publications" },
    { name: "Consulting", description: "Expert consulting services for your business.", icon: "🧑‍💼", link: "/consulting" },
    { name: "Custom Software Development", description: "Custom software solutions tailored to your needs.", icon: "💻", link: "/custom-software" },
    { name: "Mobile App Development", description: "Develop high-quality mobile applications.", icon: "📱", link: "/mobile-app" },
    { name: "Cloud Solutions", description: "Cloud-based solutions to enhance your business.", icon: "☁️", link: "/cloud-solutions" },
    { name: "SEO Services", description: "Improve your website's visibility with SEO services.", icon: "🔍", link: "/seo-services" }
];

const Services = () => {
    return (
        <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Explore the wide range of services we offer to meet your needs.</p>
            </header>
            <div className="services-container">
                {services.map(service => (
                    <div className="service-card" key={service.name}>
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-details">
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className="service-card-back">
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-details">
                                
                                
                                <a href={service.link} className="explore-button">Explore More</a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
