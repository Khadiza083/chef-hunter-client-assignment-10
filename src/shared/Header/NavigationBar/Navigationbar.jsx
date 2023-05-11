import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import './NavigationBar.css'
import { AuthContext } from '../../../Providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';


const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () =>{
        logOut().then()
        .catch(err => console.log(err.message))
    }
    return (
        <Container className='p-4 font-link'>
            <Navbar collapseOnSelect expand="lg" className='bg-white px-4'>
                <Navbar.Brand href="#home">FoodHubb</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-4 ">
                        <ActiveLink to='/' >Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>

                    </Nav>
                    {
                        user ?
                            <button onClick={handleLogout} className='custom-bg border-0 px-3 text-white rounded py-2'>Logout</button> :
                            <Nav className='d-flex align-items-center'>
                                <Nav.Link href="#deets"><FaUserCircle size={35} /></Nav.Link>
                                <Link to='/loginLayout'><button className='custom-bg border-0 px-3 text-white rounded py-2'>Login</button></Link>
                            </Nav>}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigationbar;