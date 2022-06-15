import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';


const Header = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="" style={{ marginBottom: "30px", top: "0", width: "100%", opacity: "0.9", fontWeight: "bold" }}>

                <img src="https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg" alt="" className="img-fluid"
                    style={{
                        width: "5rem"
                    }}
                />
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink href="/home" active className="text-black">Home</NavLink>
                            <NavLink href="/home" active className="text-black">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;