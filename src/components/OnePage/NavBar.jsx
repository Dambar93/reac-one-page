import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <Navbar  bg="light">
            <Container>
            <Navbar.Brand href="/"><img src="logo192.png" alt="" style={{width: 30 }} /> OnePage</Navbar.Brand>
            <Nav className=" navbar">
                <Nav.Link href="/" alt="" >Home</Nav.Link>
                <Nav.Link href="/list">About</Nav.Link>
                <Nav.Link href="/list">Services</Nav.Link>
                <Nav.Link href="/list">Portfolio</Nav.Link>
                <Nav.Link href="/list">Team</Nav.Link>
                <Nav.Link href="/list">Pricing</Nav.Link>
                <Nav.Link href="/list">Drop Down</Nav.Link>
                <Nav.Link href="/list">Contact</Nav.Link>
                <Nav.Link href="/list"><Button className="my-button">Get Started</Button></Nav.Link>

                
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;