import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const food = useLoaderData();
    console.log(food.meals[0]);
    const { strMealThumb, strMeal, strCategory, idMeal } = food.meals[0];

    return (
        <div className='mt-5 p-2 w-75'>
            <div className='d-md-flex align-items-center'>
                <div className='w-50'>
                    <img variant="top" className='w-50 mx-auto p-2' src={strMealThumb} />
                </div>

                <div className='text-start'>
                    <h2>{strMeal}</h2>
                    <p>Category: {strCategory}</p>
                    <p>Price: ${idMeal.slice(0, 3)}</p>
                    <Button className='bg-transparent border border-primary border-3'>Place Order</Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;