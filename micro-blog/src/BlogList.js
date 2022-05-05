const BlogList = ({blogs, title}) => {

// cycles through blogs array and maps each object and outputs title: and author: with JSX template
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>   

            ))}
        </div>
    );
}

export default BlogList;