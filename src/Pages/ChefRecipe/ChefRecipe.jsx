/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ChefRecipeDetails from './ChefRecipeDetails';

const ChefRecipe = () => {
    const { id } = useParams()

    const [chefRecipeDetails, setChefRecipeDetails] = useState({})
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-khadiza083.vercel.app/chefInfo/${id}`)
            .then(res => res.json())
            .then(data => setChefRecipeDetails(data))
    }, [])

    useEffect( ()=>{
        fetch(`https://chef-recipe-hunter-server-khadiza083.vercel.app/recipes/${id}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , [])

    const { chef_name, bio, experience, likes, chef_image } = chefRecipeDetails
    return (
        <Container fluid className='p-4 m-4'>
            <div className='m-4 bg-light rounded '>
                <Row>
                    <Col md={4} className='m-4'>
                        <Image src={chef_image} width={300} fluid rounded/>
                    </Col>
                    <Col md={7} className='my-auto'>
                        <div className='text-center p-4'>
                            <h3 className='custom-color my-3'>{chef_name}</h3>
                            <p className='text-secondary'>
                                {bio}
                            </p>
                            <small className='me-4'>{experience}</small>
                            <small className=''><FaThumbsUp size={20} className='mb-2 custom-color'></FaThumbsUp> {likes}</small>
                            <p>No. of Recipes: {recipes.length}</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='my-4'>
                {
                    recipes.map(recipe => <ChefRecipeDetails 
                        key={recipe.id} 
                        recipe={recipe}></ChefRecipeDetails>)
                }
            </div>
        </Container>
    );
};

export default ChefRecipe;