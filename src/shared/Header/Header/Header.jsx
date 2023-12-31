import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import banner from './../../../assets/banner.jpg'
import Navigationbar from '../NavigationBar/Navigationbar';
import './Header.css'

const Header = () => {

  const overlayStyle = {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.6)'
   };

  return (
    <Container fluid
      style={{
        backgroundImage: `url('${banner}')`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
      <div style={overlayStyle}>
        <Navigationbar></Navigationbar>
        {/* Banner  */}

        <Container className='mx-auto'>
          <div className='text-center'>
            <p className='title display-2 font-link'>Delicious food delivered with just a few taps</p>
            <p className='text-light'>Bringing your favorite flavors straight to your doorstep - order online and enjoy a hassle-free mealtime experience.</p>
            <button className='custom-bg border-0 px-3 text-white rounded py-2'>Get started</button>
          </div>
          
        </Container>
      </div>

    </Container>

  )
};

export default Header;