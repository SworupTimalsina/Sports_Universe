import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailSubmitted(true);
        // add logic to send OTP or perform other actions
    };

    const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOtpSubmitted(true);
        // add logic to verify OTP or perform other actions
    };

    const handlePasswordChange = () => {
        // add logic to validate password and perform password change
        setPasswordChanged(true);
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit}>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <button className="sub" type="submit">Submit</button>
                </form>
            ) : !otpSubmitted ? (
                <form onSubmit={handleOtpSubmit}>
                    <div className="form-group">
                        <input type="text" id="otp" name="otp" placeholder="Enter OTP" />
                    </div>
                    <button className="sub" type="submit">Submit OTP</button>
                </form>
            ) : !passwordChanged ? (
                <div>
                    <form>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button className="sub" type="button" onClick={handlePasswordChange}>Change Password</button>
                    </form>
                </div>
            ) : (
                <div>
                    <p>Your password has been changed.</p>
                    <a href="/" className="backtosignin">Back to Sign In Page</a>
                </div>
            )}
        </div>
    );
}

export default ForgotPassword;
