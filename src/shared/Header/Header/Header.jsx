import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { Button, Col, Container } from 'react-bootstrap';
import banner from './../../../assets/banner.jpg'
import Navigationbar from '../NavigationBar/Navigationbar';
import banner1 from '../../../assets/chef-1.png'
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
        backgroundSize: 'cover'

      }}>
      <div style={overlayStyle}>
        <Navigationbar></Navigationbar>
        {/* Banner  */}

        <Container className='mx-auto'>
          <div className='text-center'>
            <p className='title font-link'>Delicious food delivered with just a few taps</p>
            <p className='text-light'>Bringing your favorite flavors straight to your doorstep - order online and enjoy a hassle-free mealtime experience.</p>
            <button className='custom-bg border-0 px-3 text-white rounded py-2'>Get started</button>
          </div>
          {/* <Col xs={6} md={4}>
            <img className='cover'
              src={banner1}
              width={262}
              height={445}
              alt="" />
          </Col> */}
        </Container>
      </div>

    </Container>

  )
};

export default Header;