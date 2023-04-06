import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Restaurant = () => {
    const foods = useLoaderData();
    const { meals } = foods;
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto'>
            {
                meals.map(food => <Food
                    key={meals.idMeal}
                    food={food}
                />)
            }
        </div>
    );
};

export default Restaurant;