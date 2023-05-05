import React from 'react';
import { Container, Image } from 'react-bootstrap';
import img from './../../assets/about.png'

const About = () => {
    return (
        <div>
            <Container className='d-flex py-5 align-items-center'>
                <div>
                    <Image src={img} width={400} rounded alt="" />
                </div>
                <section className="flex-grow-1 ms-5 ">
                    <Container>
                        <h2 className='text-center custom-color'>Restaurant Hours</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Open</th>
                                    <th>Close</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>11:00 AM</td>
                                    <td>9:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>11:00 AM</td>
                                    <td>9:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>11:00 AM</td>
                                    <td>9:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>11:00 AM</td>
                                    <td>9:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>11:00 AM</td>
                                    <td>10:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>10:00 AM</td>
                                    <td>10:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>10:00 AM</td>
                                    <td>9:00 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                </section>

            </Container>
        </div>
    );
};

export default About;