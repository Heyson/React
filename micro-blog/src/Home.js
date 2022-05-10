import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   

    return (
    // cycles through blogs array and maps each object and outputs title: and author: with JSX template.
        <div className ="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );}

export default Home;