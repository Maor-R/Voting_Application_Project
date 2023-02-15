import "./App.css";
import { useState } from "react";

import { Button } from "./components/Button";

function App() {
const [currButton, setCurrButton] = useState("")
  const colors = ["blue","red","yellow"];
  const arrButton = [];

  const handleCurrButton = (event)=>{
   
    {
      setCurrButton(event.target.id)
    }
    
  }
  for (const color of colors) {
    arrButton.push(<Button handleFunc={handleCurrButton} color={color}></Button>);
  }
  


  return (
    <div className="App">
      {arrButton}
      <label>The color selected is:{currButton} </label>

    </div>
  );
  };


export default App;
