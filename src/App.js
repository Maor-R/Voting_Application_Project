import "./App.css";
import { useState } from "react";

import { Button } from "./components/Button";

function App() {
  let optionAgeArr = [];
  const test = (event) => {
    
    alert(document.getElementById('t').value);

  };
  for (let i = 0; i <= 15; i++) {
    optionAgeArr.push(<option value={i}>{i}</option>);
  }

  // console.log(checkboxArr);
  return (
    <div className="App">
      <form>
        <label>
          {" "}
          First Name: <input id="t" type="text"></input>
        </label>
        <label>
          {" "}
          Last Name: <input type="text"></input>
        </label>
        <select>
          {" "}
          Age:
          {/* parent.map((section) => (
             <div className="section">{ section }</div>
           )) */}
          {optionAgeArr}
        </select>
        <label>
          {" "}
          Free Text: <textarea></textarea>
        </label>
        <button onClick={test}>Continue</button>
      </form>
    </div>
  );
}

export default App;
