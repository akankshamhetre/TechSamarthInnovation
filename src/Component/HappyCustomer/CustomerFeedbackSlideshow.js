// CustomerFeedbackSlideshow.js

import React from 'react';
import './CustomerFeedbackSlideshow.css';

const CustomerFeedbackSlideshow = ({ feedbacks }) => {
    return (
        <div className="customer-feedback-slideshow">
            {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-slide">
                    <img src={feedback.profileImg} alt={`${feedback.name}'s profile`} />
                    <div className="feedback-details">
                        <h3>{feedback.name}</h3>
                        <p>{feedback.feedback}</p>
                        <div className="stars">
                            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerFeedbackSlideshow;
