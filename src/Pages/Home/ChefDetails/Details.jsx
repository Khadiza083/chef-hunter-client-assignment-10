/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link, useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Details = ({ chef }) => {

    const [recipes, setRecipes] = useState([])
    const { chef_name, chef_image, experience, likes, chef_id } = chef

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-khadiza083.vercel.app/recipes/${chef_id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    })
    // console.log(chef_name);
    return (

        <Col xs={12} sm={3} className='text-center rounded py-2 m-4 border-1'>
            <LazyLoad height='auto'>
                <Card className='mb-4 col ' sm={3}>
                    <div className='mx-auto p-4'>
                        <Image src={chef_image} width={200} height={250} alt="" />
                    </div>
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <div>
                            <small className='me-4'>{experience}</small>
                            <small className=''><FaThumbsUp size={20} className='mb-2'></FaThumbsUp> {likes}</small>
                            <h6>No. of Recipes: {recipes.length}</h6>
                        </div>
                        <div><Link to={`/chefRecipe/${chef_id}`}> <button className='custom-bg border-0 px-4 text-white rounded py-2 my-2'>View Recipe</button>
                        </Link>
                        </div>
                    </Card.Body>
                </Card>
            </LazyLoad>
        </Col>



    );
};

export default Details;