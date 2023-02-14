import './App.css';
import Image from "./Image/2023-02-14.png";

function App() {
  const x = 10;
  var text;
  
  
  if (x === 1) {
    text = "Equal";
  } else {
    text = "Not Equal";
  }

  return (
  <div className="App">
  <h1>Hello World</h1>
  <p>This is paragraph</p>
  <h3>{5+50}</h3>
  <img src={Image} alt="pic" width="350px" />
  <h2>{text}</h2>

  <h2>{x > 10 ? "greater" : "lesser"}</h2>
  </div>
  );
}

export default App;
