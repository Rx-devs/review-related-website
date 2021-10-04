import React from "react";
import { Card, Col } from "react-bootstrap";

const Blog = (props) => {
    const { title, description, img } = props.blog;
    
    return (
        <div>
            <Col className="h-100">
                <Card className="h-100">
                    <Card.Img style={{height:'250px', objectFit:'cover'}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 30 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Blog;

