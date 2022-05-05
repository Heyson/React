import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    // blogs array using React state and hook
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'heyson', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // prop that deletes blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
    // cycles through blogs array and maps each object and outputs title: and author: with JSX template.
    // filter blogs for author attribute to show author 'heyson'.
        <div className ="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <BlogList blogs={blogs.filter((blog) => blog.author==='heyson')} title="Heyson's blogs" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;