import "./App.css";
import { Button } from "./components/Button";

function App() {
  let bold;
  return (
    <div className="App">
      <Button bold = {true} >Important</Button>
      <Button bold = {false}> Not Important</Button>
    </div>
  );
}

export default App;
