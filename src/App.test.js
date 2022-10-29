import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  let bgc = "";
  if(count >= 10){
    bgc = "bgc-blue";
  }
  else if(count <= -10){
    bgc = "bgc-red";
  }

  const handleInc = (event) => {
    if(count >= 10){
      event.currentTarget.disabled = true;
    }
    else{
      setCount(count + 1);
    }
  };

  const handleDec = (event) => {
    if(count<= -10){
      event.currentTarget.disabled = true;
    }
    else{
      setCount(count - 1);
    }
  };
  const handleReset = (event) => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className={bgc}>
        <h1>You've clicked the button {count} times.</h1>
        <button onClick={handleInc}>Increment</button>
        <span> </span>
        <button onClick={handleDec}>Decrement</button>
        <span> </span>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}































import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
