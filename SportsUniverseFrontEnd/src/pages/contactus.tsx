import React from 'react';
import './contactus.css';
import TopBar from "./components/topbar.tsx";
import logo from "../images/logo.png"
import BottomBar from "./components/BottomBar.tsx";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";

const Article: React.FC = () => {
    return (
        <>
            <TopBar />
            <div className="contactus-container">
                <img className="logo-img" src={logo} alt="Logo" />
                <div className="ab-txt">
                    <h2>Contact Us</h2>
                    <p>Telephone Number:01-4790224</p>
                    <p>Mobile Phone Number:+977 9841552565</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/sportsuniverse.npl" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/sportsuniversenepal/" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <BottomBar />
        </>
    );
};

export default Article;
