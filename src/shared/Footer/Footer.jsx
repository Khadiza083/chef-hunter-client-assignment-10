import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark py-3">
                <Container>
                    
                    <Row>
                        <Col md={4} className="text-center text-md-left text-white my-4">
                            <p><small>Address: 123 Main Street, City, State 12345</small></p>
                            <p><small>Email: info@company.com</small></p>
                            <p><small>Phone: 123-456-7890</small></p>
                        </Col>
                        <Col md={4} className="text-center text-md-left my-4 ">
                            <Row>
                                <Link to='/' className='text-decoration-none text-white'>Home</Link>
                            </Row>
                            <Row>
                                <Link to='/blog' className='text-decoration-none text-white'>Blog</Link>
                            </Row>
                            <Row>
                                <Link to='' className='text-decoration-none text-white'>About</Link>
                            </Row>
                            <Row>
                                <Link to='' className='text-decoration-none text-white'>Contact</Link>
                            </Row>
                        </Col>
                        <Col md={4} className=" text-md-right my-4 text-white">
                            <p>Follow us on</p>
                            <p className=''><FaFacebook className='custom-color me-2' size={22}/><small>facebook</small></p>
                            <p className=''><FaTwitter className='custom-color me-2' size={22}/><small>twitter</small></p>
                            <p className=''><FaWhatsapp className='custom-color me-2' size={22}/><small>whatsApp</small></p>

                        </Col>
                        <p className='text-white text-center'><small>© 2023 All rights reserved</small></p>
                    </Row>
                </Container>
            </footer>


        </div>
    );
};

export default Footer;