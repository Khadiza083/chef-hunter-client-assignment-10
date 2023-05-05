import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Details from './Details';

const ChefDetails = () => {
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chefInfo')
        .then(res => res.json())
        .then(data => setDetails(data))
        .catch(error => console.log(error))
    },[])

    return (
        <Container>
            <h3 className='custom-color text-center'>Our chef's</h3>

            <div className='row col-sm-6 mx-auto'>
                {
                    details.map(d =><Details 
                        key={d.chef_id}
                        details ={d}
                    ></Details>)
                }
            </div>
          
        </Container>
    );
};

export default ChefDetails;