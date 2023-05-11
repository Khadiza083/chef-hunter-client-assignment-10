/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';

const ChefRecipeDetails = ({ recipe }) => {



    const { image, cooking_method, recipe_name, ingredients, rating, id } = recipe

    const cardStyle = {
        width: '400px' // Set the desired width
    };


    return (
        <Card className='my-4'>

            <Row>

                <Col md={8} className='my-auto'>
                    <div className='p-4'>

                        <div className=''>
                            <h6>Cooking method: </h6>
                            <p className='text-secondary'><small>
                                {cooking_method}
                            </small></p>

                            <h6>Ingredients: </h6>
                            <p className='text-secondary'><small>
                                {ingredients.map(i => <li>{i}</li>)}
                            </small></p>
                        </div>
                        <div className='d-flex'>
                            <FaHeart size={20} className='me-4 my-auto'></FaHeart>
                            <div>
                                
                                    <Rating 
                                        placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar size={20}></FaRegStar>}
                                        placeholderSymbol={<FaStar size={20} className='text-warning'></FaStar>}
                                        fullSymbol={<FaStar size={20}></FaStar>}
                                    />
                                <span className='ms-2'>{rating}</span>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3} className='m-4 my-auto p-4'>
                    <Image src={image} width={300} height={200} alt="" rounded />
                    <h4 className='custom-color text-center'>{recipe_name}</h4>
                </Col>
            </Row>

        </Card>
    );
};

export default ChefRecipeDetails;