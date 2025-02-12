// src/Component/FAQ/FAQ.js
import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRef = useRef(null);

    const questionsAnswers = [
        {
            question: "What is TechSamarth Innovation?",
            answer: "TechSamarth Innovation is a tech company focused on delivering innovative solutions to complex problems."
        },
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of services including software development, consulting, and project management."
        },
        {
            question: "How can I contact TechSamarth Innovation?",
            answer: "You can contact us through our website's contact form or via email at contact@techsamarth.com."
        },
        {
            question: "Where is TechSamarth Innovation located?",
            answer: "Our headquarters is located in Pune, India, but we serve clients globally."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We specialize in a variety of industries including healthcare, finance, and education."
        },
        {
            question: "Do you offer custom software solutions?",
            answer: "Yes, we provide custom software solutions tailored to the specific needs of our clients."
        },
        {
            question: "How can I get a quote for a project?",
            answer: "You can get a quote by contacting us with your project details. We'll review your requirements and provide a custom quote."
        }
    ];

    const toggleAnswer = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleClickOutside = event => {
        if (faqRef.current && !faqRef.current.contains(event.target)) {
            setActiveIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="faq-container" ref={faqRef}>
            <h2>Frequently Asked Questions</h2>
            {questionsAnswers.map((item, index) => (
                <div key={index}>
                    <div className="question" onClick={() => toggleAnswer(index)}>
                        {item.question}
                        <span className={`toggle-icon ${activeIndex === index ? 'rotate' : ''}`}>+</span>
                    </div>
                    {activeIndex === index && (
                        <div className="answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
