import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    // console.log(food.meals[0]);
    const { strMealThumb, strMeal, strInstructions } = food.meals[0];
    return (
        <div className='mt-5 p-2'>
            <h2>Recipe For : <span className='text-success'>{strMeal}</span></h2>
            <Card>
                <Card.Img variant="top" className='w-75 mx-auto' style={{ maxHeight: "500px" }} src={strMealThumb} />
                <Card.Body>
                    <Card.Title>
                        <h2>{strMeal}</h2>
                    </Card.Title>
                    <Card.Text>
                        <p><b>Introductions:</b> <br /> {strInstructions}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default FoodDetails;