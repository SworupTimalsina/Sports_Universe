import { useState } from 'react';
import axios from 'axios';
import './login&register.css';
import { useNavigate } from 'react-router-dom';


const LoginRegister = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        mobileNo: ''
    });

    const handleSignUpClick = () => {
        const container = document.getElementById('container');
        if (container) {
            container.classList.add("right-panel-active");
        }
    };

    const handleSignInClick = () => {
        const container = document.getElementById('container');
        if (container) {
            container.classList.remove("right-panel-active");
        }
    };
    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/save', userData);
            console.log(response.data); // Handle response from backend

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/validateLogin', userData);
            console.log(response.data); // Handle response from backend
            navigate("/dashboard")
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // @ts-ignore
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login">
            <div className="container" id="container">
                <div></div>
                <div className="formm-container sign-up-container">
                    <div className="signin">
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" name="username" onChange={handleChange} />
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <input type="number" placeholder="Phone Number" name="mobileNo" onChange={handleChange} />
                        <button className="s2-btn" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
                <div className="formm-container sign-in-container">
                    <div className="signup">
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <a href="/ForgotPassword" className="forgot-password">Forgot your password?</a>
                        <button className="s-btn" onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlayy">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start the journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}

export default LoginRegister;
