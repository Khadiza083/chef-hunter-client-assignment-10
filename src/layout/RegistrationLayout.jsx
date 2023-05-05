import React from 'react';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';
import Footer from '../shared/Footer/Footer';
import Registration from '../Pages/Registration/Registration';

const RegistrationLayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Registration></Registration>
            <Footer></Footer>
        </div>
    );
};

export default RegistrationLayout;