import { Container } from 'react-bootstrap';

import Footer from '../shared/Footer/Footer';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const chefRecipeLayout = () => {
    
    return (
        <Container>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default chefRecipeLayout;