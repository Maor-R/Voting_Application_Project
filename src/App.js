import "./App.css";
import { Card } from "./components/Card";
import Img from  './images/1.jpg';


function App() {
  let bold;
  return (
    <div className="App">
      <Card img={Img} title="Library" description="Some text" link="http://google.com" ></Card>
      <Card img={Img} title="Library" description="Some text" link="http://google.com" ></Card>
      <Card img={Img} title="Library" description="Some text" link="http://google.com" ></Card>
    </div>
  );
}

export default App;
