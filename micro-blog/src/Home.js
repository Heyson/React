import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // blogs array using React state and hook
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    // fetches data from JSON object to populate state in "blogs"
    useEffect(() => {
        //setTimeout performs function after 1000ms to simulate long request time to show Loading... message
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            //response object, returns a promise
                .then(res => {
                    console.log(res);
                     if(!res.ok){
                        throw Error('Could not fetch data for that resource')
                     }
                    return res.json();
                })
                // gets the data
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                //catches network error and fires a function
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })

        }, 1000);
    },     []);

    return (
    // cycles through blogs array and maps each object and outputs title: and author: with JSX template.
        <div className ="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );}

export default Home;