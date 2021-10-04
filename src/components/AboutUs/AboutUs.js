import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col>
                        <div>
                            <h3>Contact Info</h3>
                            <p>welcome to our Website. We are glad to have you around.</p>
                            <ul>
                                <li>Phone: +7 69 45 123 (800)</li>
                                <li>Email: hello@eduma.com </li>
                                <li>Address: PO Box 97845 Baker st. 567, Los Angeles, California, US</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h3>Send A Message</h3>
                            <p>Your email address will not be published. Required fields are marked</p>
                        </div>
                        
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingYourNameCustom"
                                type="YourName"
                                placeholder="YourName"
                            />
                            <label htmlFor="floatingYour NameCustom">Your Name</label>
                        </Form.Floating>
                       
                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Write Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                          
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;