import "./App.css";
import { useState } from "react";

function App() {
  const [showBox, setShowBox] = useState("block");

 const handleBox=()=> {
// alert(showBox)
  if(showBox === "none")
 { 
  setShowBox("block");
}
else {
  setShowBox("none")
}

 }
 

  return (
    <div className="App">
      <button onClick={handleBox}>show/hide</button>
      <div className="box" style={{display:showBox}}></div>
    </div>
  );
};

export default App;
