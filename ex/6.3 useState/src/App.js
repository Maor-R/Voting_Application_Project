import "./App.css";
import { useState } from "react";

import { Counter } from "./components/Counter";

function App() {
  const [cnt, setCnt] = useState(0);
  const [color, setColor] = useState("black");
  const c = (() => {
    return cnt;
}, [cnt])
  let cntDiff ;

  const handleCnt = (e) => { alert(c)
    if (e.target.id === "increscent" && cnt < 10) {
      setCnt((prevCnt) => prevCnt + 1);
      cntDiff = 1;
    } else if (e.target.id === "decrescent" && cnt > -10) {
      setCnt((prevCnt) => prevCnt - 1);
      cntDiff = -1;
    }
    else {
      cntDiff = 0;
    }

    const _color = cnt+cntDiff > 0 ? "green" : cnt+cntDiff < 0 ? "red" : "black";
    setColor(_color);
  };
  return (
    <div className="App">
      <Counter color={color} counter={cnt}></Counter>
      <button id="increscent" onClick={handleCnt}>
        Increscent
      </button>
      <button id="decrescent" onClick={handleCnt}>
        Decrescent
      </button>
    </div>
  );
}

export default App;
