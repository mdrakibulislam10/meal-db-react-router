import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Foods = ({ food }) => {
    console.log(food);
    const { strMealThumb, strCategory, strMeal, idMeal } = food;

    const navigate = useNavigate();

    return (
        <div className='my-2'>
            <Card className='text-start'>
                <Card.Img variant="top" style={{ height: "180px" }} src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        <p>Category: {strCategory}</p>
                        <p>Price: ${idMeal.slice(0, 3)}</p>
                    </Card.Text>
                </Card.Body>
                <div className='mb-3 d-flex justify-content-between align-items-center'>
                    <Link to={`/food/${idMeal}`} className='text-decoration-none border border-success p-2 rounded'>Show details-link</Link>
                    <Link to={`/food/${idMeal}`}><Button variant="primary">Show details-btn</Button></Link>
                </div>
                <Button onClick={() => navigate(`/food/cart/${idMeal}`)} variant="warning" className='fw-bold'>Add to cart</Button>
            </Card>
        </div>
    );
};

export default Foods;