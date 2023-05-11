import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../shared/Footer/Footer';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';
import ChefRecipe from '../Pages/ChefRecipe/ChefRecipe';
import { Outlet } from 'react-router-dom';

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