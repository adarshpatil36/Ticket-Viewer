import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";

function App() {
  const userData = false; // Add user inputs here
  return (
    <div className="App">
      <Component input={userData}></Component>
    </div>
  );
}

export default App;
