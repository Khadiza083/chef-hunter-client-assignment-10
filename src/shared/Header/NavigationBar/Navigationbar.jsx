import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';
import './NavigationBar.css'
import { AuthContext } from '../../../Providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';
import 'react-tooltip/dist/react-tooltip.css'


const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext)

    console.log(user?.photoURL);
    const handleLogout = () => {
        logOut().then()
            .catch(err => console.log(err.message))
    }
    return (
        <Container className='p-4 font-link'>
            <Navbar collapseOnSelect expand="lg" className='bg-white px-4'>
                <Navbar.Brand href="/">FoodHubb</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-4 ">
                        <ActiveLink to='/' >Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>

                    </Nav>
                    {
                        user ?
                            <Nav className='d-flex align-items-center'>
                                <button onClick={handleLogout} className='custom-bg border-0 px-3 text-white rounded py-2'>Logout</button>
                                <Nav.Link href="#deets">
                                    <Image title={user.email} width={50} height={50} src={user.photoURL} roundedCircle/>
                                    
                                </Nav.Link>
                            </Nav> :
                            <Nav className='d-flex align-items-center'>
                                <Nav.Link href="#deets"><FaUserCircle size={35} /></Nav.Link>
                                <Link to='/loginLayout'><button className='custom-bg border-0 px-3 text-white rounded py-2'>Login</button></Link>
                            </Nav>}
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

export default Navigationbar;