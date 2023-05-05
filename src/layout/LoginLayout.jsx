import React from 'react';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';

import Footer from '../shared/Footer/Footer';
import Login from '../Pages/Login/Login';

const LoginLayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;