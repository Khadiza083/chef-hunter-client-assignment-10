import React from 'react';
import image from './../../assets/404-error.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Navigationbar from '../../shared/Header/NavigationBar/Navigationbar';
import Footer from '../../shared/Footer/Footer';

const NotFound = () => {

    return (
        <div>
            <Navigationbar></Navigationbar>
            <Container>
                <Row>

                    <Col className='text-center my-auto'>
                        <p className='fw-semibold display-1 custom-color'>OOPS!!!</p>
                        <h1 className='custom-color'> Not found page</h1>
                    </Col>
                    <Col>

                        <Image src={image} width={400} />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;