import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
    const { img, name, price } = props.course;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img style={{height:'200px', objectFit:'cover'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                    </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                    <h6>Price: {price}</h6>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;