import React, { useContext, useState } from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import img from './../../assets/login.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        
        console.log(email, password, createUser)

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            const err = error.message;
            setError(err);
        })
    }
    return (
        <Container className='d-flex align-items-center flex-sm-row flex-column'>
            <div className='m-4'>
                <Image src={img} width={400} rounded alt="" />
            </div>
            <div className='w-50 w-sm-25 mx-auto'>
                <h2 className='custom-color text-center mb-4'>Register Please!</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3 custom-color" controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Enter name"  required/>
                    </Form.Group>
                    <Form.Group className="mb-3 custom-color" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email"  required/>
                    </Form.Group>


                    <Form.Group className="mb-3 custom-color" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password"  required/>
                    </Form.Group>
                    <Form.Group className="mb-3 custom-color" controlId="formBasicPassword">
                        <Form.Label>Photo URl</Form.Label>
                        <Form.Control type="photo" name="photo" placeholder="photo" required />
                    </Form.Group>

                    <div><button className='custom-bg border-0 px-4 text-white rounded py-2 my-2'>Register</button></div>
                </Form>
                
                <p className='text-danger'>{error}</p>
                <p className='mt-2'><small>Already have an account? <Link to='/loginLayout'>login</Link></small></p>
            </div>
        </Container>
    );
};

export default Registration;