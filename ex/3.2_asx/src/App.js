import "./App.css";

function App() {
  const data = ["hello", "world"];
  const str = data[0] + " " + data[1];

  const number1 = 5;
  const number2 = 6;

  const sum = number1 + number2;

  const string = "I love React!"
  return (
    <div>
      <p> {str} </p>
      <p> result: {sum} </p>
      <p>The string’s length is: {string.length}</p>
    </div>
  );
}

export default App;
