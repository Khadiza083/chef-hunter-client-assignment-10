import React, { useContext } from 'react';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';
import Footer from '../shared/Footer/Footer';
import Registration from '../Pages/Registration/Registration';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProviders';

const RegistrationLayout = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        if(loading){
            return <Spinner animation="border" variant="primary" />
        }
    }
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Registration></Registration>
            <Footer></Footer>
        </div>
    );
};

export default RegistrationLayout;