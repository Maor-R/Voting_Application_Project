import "./App.css";
import { useState, useEffect } from "react";
import data from "./data.js";
import { Name } from "./components/Name";
import { Card } from "./components/Card";

function App() {
  const [namesArr, setNamesArr] = useState(
    data.map((obj) => {
      return <p> {obj.name}</p>;
    })
  );
  const [objDateBefore1990Arr, setObjDateBefore1990Arr] = useState(
    data
      .filter((obj) => {
        return obj.birthday.slice(-4) < 1990;
      })
      .map((obj) => {
        return obj;
      })
  );

  // useEffect(() => {
  //   setNamesArr((prevArray) => [
  //     ...prevArray,
  //     data.map((obj) => {
  //       return <p> {obj.name}</p>;
  //     }),
  //   ]);
  // }, []);

  //   setObjDateBefore1990Arr((prevArray) => [
  //     ...prevArray,
  //     data
  //       .filter((obj) => {
  //         return obj.birthday.slice(-4) < 1990;
  //       })
  //       .map((obj) => {
  //         return obj;
  //       }),
  //   ]);
  // };


  return (
      <div className="App">
      <label>Names:</label>
      <Name className="Name" names={namesArr}></Name>
      <label>Born before 1990:</label>
      {objDateBefore1990Arr.map((obj) => (
        <Card data={obj}></Card>
      ))}
    </div>
  );
}

export default App;
