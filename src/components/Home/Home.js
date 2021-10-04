import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import img from "../../images/banner-illustration.webp";
import Course from "../Course/Course";
import './Home.css';

const Home = () => {
    const [courses] = useCourses();
    
    return (
        <div className="overflow-hidden">
            <Row className="p-5" style={{backgroundColor:'#ddd'}}>
                    <Col className="d-flex justify-content-center align-items-center flex-column py-5">
                        <h1 className="mb-5">Learn Your
                            Favorite Course
                        <br /> From Online</h1>
                        <button className="btn btn-outline-danger w-50">Browse Our Courses</button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img src={img} style={{ width: '400px',}} alt="" />
                    </Col>
                </Row>
            
            <Container>
                <div className="py-5">
                    <h2 className="text-center mb-4">Popular Courses</h2>
                    <Row xs={1} md={4} className="g-2">
                        {
                            courses.slice(0, 4).map(course => <Course
                                course={course}
                                key={course.key}
                            ></Course>)
                        }
                    </Row>
                </div>
                
            </Container>
        </div>
    );
};

export default Home;

