import "./App.css";
import { useState } from "react";

import { Counter } from "./components/Counter"


function App() {
  const [cnt, setCnt] = useState(0);

  
 const handleCnt=()=>{
    setCnt(prevCnt => prevCnt+1)};
  return (
    <div className="App">
      <Counter counter= {cnt}></Counter>
      <button onClick={handleCnt}>Increscent</button>
    </div>
  );
};

export default App;
