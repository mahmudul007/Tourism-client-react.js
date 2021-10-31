import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Topnav = () => {
    const { user, logOut } = useAuth();

    // console.log(user);
    return (
        <>
            <Navbar bg="light" collapseOnSelect expand="lg">
                <h1 className="text-primary text-center">RONGDHONU TOURISOM</h1>
                <Container>
                    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/addservice">Dasboard</Nav.Link>

                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/myorder">Myorder</Nav.Link>

                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/about">About us</Nav.Link>

                        </Nav>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Topnav;