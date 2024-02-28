import React from 'react';
import './products.css';
import TopBar from "./components/topbar.tsx";



const Products: React.FC = () => {
    return (
    <>
        <TopBar/>
        <div className="bg-pro">
            <div className="categories">
                <button className="cteg-btn">Football</button>
                <button className="cteg-btn">Basketball</button>
                <button className="cteg-btn" >Taekwondo</button>
                <button className="cteg-btn" >Jump Ropes</button>
                <button className="cteg-btn" >Boxing</button>
                <button className="cteg-btn" >Clothing</button>
                <button className="cteg-btn" >Shoes</button>
                <button className="cteg-btn">Other items</button>
                <button className="cteg-btn">All</button>
            </div>

            <input
                type="text"
                placeholder="Search products..."
                className="search-inp"/>

            <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', width: '70%', color: 'black'}}>

            </div>
        </div>

    </>

);
};


export default Products;