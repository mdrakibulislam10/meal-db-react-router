import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const goBack = useNavigate();

    return (
        <div className='mt-5'>
            <h2 className='my-4'>Please search valid url!!!</h2>
            <Button variant='secondary' onClick={() => goBack(-1)}>Go to previous page</Button>
        </div>
    );
};

export default ErrorPage;