import React, { useContext } from 'react';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';

import Footer from '../shared/Footer/Footer';
import Login from '../Pages/Login/Login';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const LoginLayout = () => {

    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;