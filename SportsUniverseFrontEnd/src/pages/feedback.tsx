import React, { useState } from 'react';
import './feedback.css';
import TopBar from "./components/topbar.tsx";
import BottomBar from "./components/BottomBar.tsx";

const FeedbackPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // add logic to submit the feedback data to your backend or perform any necessary actions.
        setSubmitted(true);
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setContact('');
        setFeedback('');
        setSubmitted(false);
    };

    return (
        <>
            <TopBar />
            {submitted ? (
                <div className="thank-you-popup">
                    <p>Thank you for your feedback!</p>
                    <button className="feedsum" onClick={resetForm}>Resubmit Form</button>
                </div>
            ) : (
                <div className="feedback-container">
                    <div className="feedback-box">
                        <h2>Feedback</h2>
                        <p>Please take a moment to complete the form given below and let us know how you are feeling with our products and services? It is very important to us to get your feedback in a timely way, so that we can provide better and improved services to you in the near future.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Customer Name:</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email ID:</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact Number:</label>
                                <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="feedback">Feedback:</label>
                                <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
                            </div>
                            <button className="feedsum" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            <BottomBar />
        </>
    );
};

export default FeedbackPage;
