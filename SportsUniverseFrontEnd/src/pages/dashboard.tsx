import React from 'react';
import './dashboard.css';
import TopBar from "./components/topbar.tsx";
import BottomBar from "./components/BottomBar.tsx";
import product from "../images/product.png";
import image1 from "../images/o1.png";
import image2 from "../images/o2.png";
import image3 from "../images/o3.png";
import image4 from "../images/o4.png";

const Dashboard: React.FC = () => {
    return(
        <div className="dashboard-container">
            <TopBar/>
            <img src={product} className="dashboard-photo" alt="Product" />
            <div className="divider"></div>
            <div className="category-section">
                <p className="topic">Category</p>
            </div>
            <div className="divider"></div>
            <div className="weoffer-section">
                <p className="topic">What we Offer</p>
                <div className="offer-boxes-container">
                    <div className="offer-box">
                        <img src={image1} alt="Offer 1" className="offer-image" />
                        <p className="offer-topic">Certified Products</p>
                        <p className="offer-description">High-quality, certified sports equipment for athletes at all levels. Ensuring the highest levels of safety, performance, and quality for our customers.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image2} alt="Offer 2" className="offer-image" />
                        <p className="offer-topic">All Sports Equipment Solution</p>
                        <p className="offer-description">Get everything you need to achieve your fitness goals with our comprehensive range of Sports & Fitness equipment solutions, from basic gear to specialized equipment.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image3} alt="Offer 3" className="offer-image" />
                        <p className="offer-topic">Comprehensive Customer Support</p>
                        <p className="offer-description">We're here to assist you every step of the way, from providing product information to technical support and troubleshooting. Our commitment to your satisfaction is unwavering.</p>
                    </div>
                    <div className="offer-box">
                        <img src={image4} alt="Offer 4" className="offer-image" />
                        <p className="offer-topic">Smart Automation Manufacturing</p>
                        <p className="offer-description">Our cutting-edge technology, such as Laser cutting, Powder Coating, Injection Molding, Rubber Compression Molding, VMC, and CNC, guarantees accuracy and productivity in all stages of the manufacturing process.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="newarrivals-section">
                    <p className="topic">New Arrivals</p>
                </div>
                <div className="divider"></div>
            </div>
            <BottomBar/>
        </div>
    );
};
export default Dashboard;
