import React, { useState } from 'react';
import './App.css';

function App() { 
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return  (
    <>
      <h1>Current emotion is {emotion}.</h1>
      <button onClick ={() => setEmotion("happy")} >Happy</button>
      <button onClick ={() => setEmotion("frustrated")} >Frustrated</button>
      <button onClick ={() => setEmotion("enthusiastic")} >Enthuse</button>
    </>
  );
}
  
export default App;
