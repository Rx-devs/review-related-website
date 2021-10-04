import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
                <Container>
                    <Navbar.Brand>LearningHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-light text-decoration-none me-3" to="/home">Home</NavLink>
                            <NavLink className="text-light text-decoration-none me-3" to="/courses">Courses</NavLink>
                            <NavLink className="text-light text-decoration-none me-3" to="/blogs">Blogs</NavLink>
                            <NavLink className="text-light text-decoration-none me-3" to="/about">About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;