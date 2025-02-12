import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const contactDetails = [
    {
        icon: <AiFillMail className="icon" />,
        link: 'mailto:techsamarthinnovations@gmail.com'
    },
    {
        icon: <AiFillPhone className="icon" />,
        link: 'tel:+918149282665'
    },
    {
        icon: <FaWhatsapp className="icon" />,
        link: 'https://wa.me/918149282665'
    },
    {
        icon: <AiFillInstagram className="icon" />,
        link: 'https://www.instagram.com/TechSamarth_Innovations'
    },
    {
        icon: <AiFillFacebook className="icon" />,
        link: 'https://www.facebook.com'
    }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 TechSamarth Innovation. All rights reserved.</p>
                <div className="social-media">
                    {contactDetails.map((contact, index) => (
                        <a key={index} href={contact.link || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
                            {contact.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
