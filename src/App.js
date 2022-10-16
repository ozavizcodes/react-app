import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ColorSwitcher from './ColorSwitcher';

function App() {
  

  return (
    <div className="App">
      <ColorSwitcher />

      {/* <ColorSwitcher.jsx /> */}
     {/* <h1>Current emotion is {emotion}</h1>
     <button onClick={()=> setEmotion("sad")}>
      sad
     </button>
     <button onClick={()=> setEmotion("excited")}>
      excited
     </button> */}
     
    </div>
  );
}

export default App;
