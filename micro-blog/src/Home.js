import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // blogs array using React state and hook
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    // fetches data from JSON object to populate state in "blogs"
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            //response object, returns a promise
            .then(res => {
                return res.json();
            })
            // gets the data
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    },     []);

    return (
    // cycles through blogs array and maps each object and outputs title: and author: with JSX template.
        <div className ="home">
        
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );}

export default Home;