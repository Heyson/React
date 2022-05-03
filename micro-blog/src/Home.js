import { useState } from "react";

const Home = () => {
    //let name = 'Joe';
    const [name, setName] = useState('Joe');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('John'); 
        setAge(30);       
    }
   
    return (
        <div className ="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;