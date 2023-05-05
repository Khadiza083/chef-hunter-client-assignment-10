import React from 'react';
import Header from '../shared/Header/Header/Header';
import Footer from '../shared/Footer/Footer';
import RestaurantHour from '../shared/RestaurantHour/RestaurantHour';
import About from '../shared/AboutUs/About';


const Main = () => {
    return (
        <div>
            <Header/>
            <RestaurantHour/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Main;