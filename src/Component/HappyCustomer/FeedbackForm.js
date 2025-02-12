// src/Component/HappyCustomer/FeedbackForm.js

import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ addFeedback }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: 0,
        profileImg: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStarClick = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add default profile image if none provided
        if (!formData.profileImg) {
            formData.profileImg = 'https://via.placeholder.com/150'; // Placeholder image
        }
        addFeedback(formData);
        setFormData({ name: '', email: '', feedback: '', rating: 0, profileImg: '' });
    };

    return (
        <div className="feedback-form-container">
            <h2>Leave Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name">Enter Your Name Here...</label>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Enter Your Email Here...</label>
                </div>
                <div className="form-group">
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label htmlFor="feedback">Leave Your Feedback Here...</label>
                </div>
                <div className="form-group stars-group">
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= formData.rating ? "star filled" : "star"}
                                onClick={() => handleStarClick(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
