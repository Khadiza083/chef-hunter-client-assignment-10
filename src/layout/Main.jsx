import React from 'react';
import Header from '../shared/Header/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import RestaurantHour from '../shared/RestaurantHour/RestaurantHour';
import About from '../shared/AboutUs/About';


const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <RestaurantHour/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Main;