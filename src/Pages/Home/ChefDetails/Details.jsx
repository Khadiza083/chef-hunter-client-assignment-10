import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';

const Details = ({ chef }) => {
    const { chef_name, chef_image, experience, likes, recipes } = chef
    console.log(chef_name);
    return (

        <Col xs={12} sm={3} className='text-center rounded py-2 m-4 border-1'>

            <Card className='mb-4 col ' sm={3}>
                <div className='mx-auto p-4'>
                    <Image src={chef_image} width={200} height={250} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <small className='me-4'>{experience}</small>
                        <small className=''><FaThumbsUp size={20} className='mb-2'></FaThumbsUp> {likes}</small>
                        <p>No. of Recipes: {recipes.length}</p>
                    </Card.Text>
                    <div><button className='custom-bg border-0 px-4 text-white rounded py-2 my-2'>View Recipe</button></div>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default Details;