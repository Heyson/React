import React from 'react';
import './App.css';

function Header(props) {
  console.log(props);
  return(
    <header>
      <h1>{props.name} Kitchen</h1>
  </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>It's true</p>
    </footer>    
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Joe"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
