import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import person1 from './../../assets/person-1.jpg'
import person2 from './../../assets/person-2.png'
import person3 from './../../assets/person-3.jpg'
import bg from './../../assets/background-2.jpg'

const About = () => {
    const overlayStyle = {

        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    };

    return (
        <Container fluid
            style={{
                backgroundImage: `url('${bg}')`,
                height: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'

            }}  >
            <div style={overlayStyle}>
                <Container>
                    <Row gutter={20} className='custom-color py-4 mx-auto'  >
                        <Col xs={12} sm={3} className='text-center bg-white rounded py-2 m-4 '>
                            <Image src={person1} width={80} roundedCircle />
                            <div className='mt-4'>
                                <h4>Khadiza khatun</h4>
                                <p><small>Owner</small>
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={3} className='text-center bg-white rounded py-2 m-4'>
                            <Image src={person2} width={80} roundedCircle />
                            <div className='mt-4'>
                                <h4>Mohammad Sowrav</h4>
                                <p><small>General Manager</small>
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={3} className='text-center bg-white rounded py-2 m-4'>
                            <Image src={person3} width={80} roundedCircle />
                            <div className='mt-4'>
                                <h4>Md. Shahidullah</h4>
                                <p><small>Marketing Manager</small>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </Container>
    );
};

export default About;