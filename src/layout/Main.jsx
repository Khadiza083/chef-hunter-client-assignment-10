import React from 'react';
import Header from '../shared/Header/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import About from '../shared/AboutSection/About';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Main;