import React from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <Container className="py-4">
                <h2 className="text-center mb-4">All Popular Courses</h2>
                <Row xs={1} md={4} className="g-2">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.key}
                        ></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;