import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    }, []);
    return (
        <div className="py-5">
            <Container>
                <Row xs={1} md={2} className="g-3">
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            key={blog.key}
                        ></Blog>)
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Blogs;