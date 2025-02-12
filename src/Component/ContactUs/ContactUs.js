// ContactUs.js
import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineGlobal } from 'react-icons/ai';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
    const contactItems = [
        { icon: <MdEmail className="icon" />, text: 'techsamarthinnovations@gmail.com', link: 'mailto:techsamarthinnovations@gmail.com' },
        { icon: <AiOutlineInstagram className="icon" />, text: '@TechSamarth_Innovations', link: 'https://www.instagram.com/TechSamarth_Innovations' },
        { icon: <MdPhone className="icon" />, text: '+91 8149282665', link: 'tel:+918149282665' },
        { icon: <AiOutlineGlobal className="icon" />, text: 'www.techsamarthinnovations.com', link: 'https://www.techsamarthinnovations.com' },
        { icon: <MdLocationOn className="icon" />, text: 'A/P. Wagholi Pune 412207' }
    ];

    return (
        <div className="contact-info">
            <h2>Contact Us</h2>
            {contactItems.map((item, index) => (
                <div className="contact-item" style={{ '--i': index }} key={index}>
                    {item.icon}
                    {item.link ? (
                        <a href={item.link}>{item.text}</a>
                    ) : (
                        <p>{item.text}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactUs;
