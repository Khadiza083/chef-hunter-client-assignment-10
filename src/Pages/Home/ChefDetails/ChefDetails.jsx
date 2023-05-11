/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';


const ChefDetails = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefInfo/')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <Container>
            <h2 className='text-center mt-4 custom-color'>Our chef's</h2>

            <Row gutter={20} className='py-4 mx-auto'  >
                    {
                        chefs.map(chef => <Details
                            key={chef.chef_id}
                            chef={chef}></Details>)
                    }
             </Row>

        </Container>
    );
}; Container

export default ChefDetails;