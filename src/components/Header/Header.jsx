import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='d-flex justify-content-around'>
            <h3 className='text-danger'>Food City</h3>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary p-1 rounded-3 mb-2' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex gap-3">
                            <ActiveLink to={"/"}>Home</ActiveLink>
                            <ActiveLink to={"/restaurant"}>Restaurant</ActiveLink>
                            <ActiveLink to={"/about"}>About</ActiveLink>
                            <ActiveLink to={"/dashboard"}>Dashboard</ActiveLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                {/* use link */}
                <Button variant='warning fw-bold'>Login</Button>
            </div>
        </div>
    );
};

export default Header;