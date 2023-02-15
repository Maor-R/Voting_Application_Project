import "./App.css";
import { useState } from "react";

import { Button } from "./components/Button";

function App() {
  const checkboxTextArr = [
    "I read the term of the app",
    "I accept term of the app",
    "I want to get weekly new letter",
    "I want to get sales and offers",
  ];
  let checkboxArr = [];
  // const test = (event) => {
  //   (event.target.checked);

  // };
  checkboxArr.push(<form />);
  for (let i = 0; i < checkboxTextArr.length; i++) {
    i < 2
      ? checkboxArr.push(
          <label>
            <input type="checkbox" />{checkboxTextArr[i]}
          </label>
        )
      : checkboxArr.push(
          <label>
            <input type="checkbox" checked />{checkboxTextArr[i]}
          </label>
        );
  }

  console.log(checkboxArr);
  return <div className="App">{checkboxArr}</div>;
}

export default App;
