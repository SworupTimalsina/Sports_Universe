import React from 'react';
import './topbar.css';

const TopBar: React.FC = () => {
    return (
        <>
            <div className="top-buttons">


                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='/aboutus' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    <a href='/admin' style={{ backgroundColor: 'black', color: 'white' }}><b>Admin</b></a>
                </div>

                <a href='/' style={{ backgroundColor: 'black', color: 'white' }} className="logout-button"><b>Log Out</b></a>

            </div>

        </>
    );
};

export default TopBar;