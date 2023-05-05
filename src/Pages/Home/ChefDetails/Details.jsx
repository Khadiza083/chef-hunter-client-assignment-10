import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';

const Details = ({ details }) => {
    console.log(details);

    const { chef_name, chef_image, chef_id, bio, experience, likes, recipes } = details
    return (
        <div>
            <Card className='mb-4 '>
                <Image src={chef_image} width={200} alt="" />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <small className='me-4'>{experience}</small>
                        <small>Likes: {likes}</small>
                    </Card.Text>
                    <div><button className='custom-bg border-0 px-4 text-white rounded py-2 my-2'>View Recipe</button></div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;