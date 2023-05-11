/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import img from './../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/'

    const githubProvider = new GithubAuthProvider();
    const { signIn, popupSignIn } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                const err = error.message;
                setError(err)
            })

    }

    const handleGoogleLogin = () => {
        popupSignIn(googleProvider)

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                const err = error.message;
                setError(err);
            })
    }
    const handleGithubLogin = () => {
        popupSignIn(githubProvider)

            .then(result => {
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
                <h2 className='custom-color text-center mb-4'>Login Please!</h2>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3 custom-color" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 custom-color" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <p className='text-danger'>{error}</p>

                    <div><button className='custom-bg border-0 px-4 text-white rounded py-2 my-2'>Login</button></div>
                </Form>
                <div><button onClick={handleGoogleLogin} className='bg-primary border-0 px-4 text-white rounded py-2 my-2'><FaGoogle /> Login with google</button></div>
                <div><button onClick={handleGithubLogin} className='bg-dark border-0 px-4 text-white rounded py-2 my-2'><FaGithub />Login with github</button></div>
                <p className='mt-2'><small>Don't have an account? <Link to='/registerLayout'>Register</Link></small></p>
            </div>
        </Container>

    );
};

export default Login;