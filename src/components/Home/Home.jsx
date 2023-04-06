import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1 className='my-5 text-warning'>Welcome to Food City!!!</h1>
            <h2 className='text-info'>Go to Restaurant page</h2>
            <InputGroup className="mt-5 mx-auto" style={{ maxWidth: "600px" }}>
                <Form.Control
                    placeholder="search food"
                    aria-label="search-food"
                    aria-describedby="basic-addon2"
                />
                <Button id="basic-addon2">Search Food</Button>
            </InputGroup>
        </div>
    );
};

export default Home;