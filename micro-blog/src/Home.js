const Home = () => {
    const handleClick = (e) => {
        console.log('hello World', e);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name);
    }
    return (
        <div className ="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Joe', e)}>Click me again</button>
        </div>
    );
}

export default Home;