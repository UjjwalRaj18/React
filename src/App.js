import { React, useState } from 'react'
import "./App.css";
 
export default function App() {
  const [counter, setCounter] = useState(0);
  let editcount = 5;
 
  //increase counter
  const increase = () => {
    setCounter(count => count + editcount);
  };
 
  
  //decrease counter
  const decrease = () => {
    setCounter(count => count - editcount);
  };
 
  //reset counter 
 
 
  return (
    <div align = "center">
    <h1>
        <div class="style">Hello I'm Ujjwal</div>
    </h1>
    <button class="button plus" onClick={increase}>+</button>
    <button class="button minus" onClick={decrease}>-</button>
    <span class="num">{counter}</span>
    <h2>
        <div class="styles">Current Counter:<span class="nums">{editcount}</span></div>
    </h2>
</div>
    
  );
}
