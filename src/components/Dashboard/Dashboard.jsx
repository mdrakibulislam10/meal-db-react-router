import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const foods = useLoaderData();
    const { meals } = foods;
    console.log(meals);

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    // width={800}
                    // height={400}
                    data={meals}
                >
                    <XAxis dataKey="idMeal" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="idMeal" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;