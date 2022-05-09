import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // blogs array using React state and hook
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // fetches data from JSON object to populate state in "blogs"
    useEffect(() => {
        //setTimeout performs function after 1000ms to simulate long request time to show Loading... message
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            //response object, returns a promise
            .then(res => {
                return res.json();
            })
            // gets the data
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });
        }, 1000);
    },     []);

    return (
    // cycles through blogs array and maps each object and outputs title: and author: with JSX template.
        <div className ="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );}

export default Home;