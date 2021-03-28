import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="/" className="title-heading">Secure Cloud Storage</Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default Header;