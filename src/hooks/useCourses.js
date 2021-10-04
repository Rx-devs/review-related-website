import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./coursesData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
        
    }, []);
    
    // return necessay things
    return [courses, setCourses];
};

export default useCourses;