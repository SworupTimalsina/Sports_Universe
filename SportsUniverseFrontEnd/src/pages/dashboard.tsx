import React from 'react';
import './dashboard.css';
import TopBar from "./components/topbar.tsx";
import BottomBar from "./components/BottomBar.tsx";



const Dashboard: React.FC = () => {
    return(
        <div>
        <TopBar/>
        <BottomBar/>
        </div>

    );

};

export default Dashboard;
