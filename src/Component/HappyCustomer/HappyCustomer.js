// src/Component/HappyCustomer/HappyCustomer.js

import React, { useState } from 'react';
import './HappyCustomer.css';
import FeedbackForm from './FeedbackForm';

const HappyCustomer = () => {
    const [feedbacks, setFeedbacks] = useState([
        {
            name: 'Akanksha Singh',
            email: 'akanksha@example.com',
            feedback: 'The service was fantastic! Highly recommend.',
            rating: 5,
            profileImg: require('../../Img/akanksha.jpg')
        },
        {
            name: 'Shree Patel',
            email: 'shree@example.com',
            feedback: 'Very satisfied with the support and services.',
            rating: 4,
            profileImg: require('../../Img/shree.jpg')
        },
        {
            name: 'Dinesh Kumar',
            email: 'dinesh@example.com',
            feedback: 'Great experience, will come back for sure!',
            rating: 5,
            profileImg: require('../../Img/dinesh.jpeg')
        }
    ]);

    const addFeedback = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback]);
    };

    return (
        <div className="happy-customer-container">
            <h2>Our Happy Customers</h2>
            <div className="customer-feedback-slideshow">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="feedback-card">
                        <img src={feedback.profileImg} alt={feedback.name} />
                        <h3>{feedback.name}</h3>
                        <p>{feedback.feedback}</p>
                        <div className="stars">
                            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                        </div>
                    </div>
                ))}
            </div>
            <FeedbackForm addFeedback={addFeedback} />
        </div>
    );
};

export default HappyCustomer;
