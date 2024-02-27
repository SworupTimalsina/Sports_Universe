import React from 'react';
import './BottomBar.css';
import maps from './maps.png';
import payment from './logomacha.png';
import payment2 from './fonepay.png';
import { Link } from "react-router-dom";

const BottomBar: React.FC = () => {
    return (
        <>
            <div className="about">
                <div className="about-buttons">
                    <div className="but-img">
                        <div className="abt-but">
                            <Link to="/aboutus"><button className="about">About Us</button></Link>
                            <Link to="/feedback"><button className="feed">Feedback</button></Link>
                            <Link to="/contactus"><button className="contact">Contact Us</button></Link>
                        </div>

                        <div className="image1">
                            <a href="https://maps.app.goo.gl/uyyLGLbj8mzb16Xu9" target="_blank" rel="noopener noreferrer">
                                <h1 className="location">Our Location</h1>
                                <img src={maps} width="350" height="230" alt="Maps"/>
                            </a>
                        </div>

                        <div className="image2">
                            <h1 className="payments">Payments</h1>
                            <img src={payment} width="350" height="100" alt="Macchapuchre"/>
                            <img src={payment2} width="350" height="100" alt="Fonepay"/>
                        </div>
                    </div>
                </div>
            </div>
            <label className="copyright">  Copyright © 2024 Sports Universe</label>
        </>
    );
};

export default BottomBar;
