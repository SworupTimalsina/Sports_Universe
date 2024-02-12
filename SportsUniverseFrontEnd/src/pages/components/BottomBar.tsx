import React from 'react';
import './BottomBar.css';
import maps from './maps.png';
import payment from './logomacha.png'
import payment2 from './fonepay.png'
import {Link} from "react-router-dom";


const BottomBar: React.FC = () => {
    return (
        <>
            <div className="about">
                <div className="about-buttons">
                    <div className="but-img">
                        <div className="abt-but">
                   <Link to="/aboutus"> <button className="about">About Us</button></Link>
                    <button className="feed">Feedback</button>
                    <button className="contact">Contact Us</button>
                        </div>

                    <a href="https://maps.app.goo.gl/uyyLGLbj8mzb16Xu9" target="_blank" rel="noopener noreferrer">
                            <div className="image1">
                                <div>
                                    <h1 className="location">Our Location</h1>
                                <img src={maps} width="350" height="230" alt="Maps"/>
                                </div>
                            <div className="image2">
                                <h1 className="location">Payments</h1>
                                <img src={payment} width="350" height="100" alt="Macchapuchre"/>
                                <img src={payment2} width="350" height="100" alt="Fonepay"/></div>
                            </div>

                    </a>
                    </div>


                    <label className="copyright">  Copyright © 2024 Sports Universe</label>

                </div>
            </div>
        </>
    );
};

export default BottomBar;