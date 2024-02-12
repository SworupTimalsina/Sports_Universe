import React from 'react';
import './aboutus.css';
import TopBar from "./components/topbar.tsx";
import logo from "../images/logo.png"
import BottomBar from "./components/BottomBar.tsx";
import product from "../images/product.png";

const Article: React.FC = () => {
    return (
        <>
            <TopBar />
            <div className="aboutus-container">
                <img className="logo-img" src={logo} alt="Logo" />
                <div className="ab-txt">
                    <h2>About Us</h2>
                    <p>Sports Universe is the largest supplier and exporter of sports and fitness equipment based in Baneshowor, Kathmandu, Nepal. We offer a wide range of sports and fitness equipment, including Basketball Equipment, Board Games, Carrom Board, Cricket Equipment, Gymnastic Equipment, and more. Our products are available all over Nepal.</p>

                    <img src={product} width="800" height="300" alt="product"/>

                </div>
            </div>
            <BottomBar />
        </>
    );
};

export default Article;
