import React from 'react';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
