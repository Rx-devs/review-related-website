import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <Container style={{height:'100vh'}}>
            <div className="text-center py-5">
                <h1 className="text-dark">404</h1>
                <h2 className="text-danger">Nothing Found !!!</h2>
            </div>
        </Container>
    );
};

export default NotFound;