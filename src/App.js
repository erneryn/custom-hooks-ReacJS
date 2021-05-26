import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter";
import Form from './form'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">REACT JS CUSTOM HOOKS</h1>
      </header>

      <div className="counter-container">
        <h1 className="subtitle">Counter</h1>
        <Counter />
      </div>
  
      <div>
        <h1 className="subtitle">Input Form</h1>
        <Form/>
      </div>
    </div>
  );
}

export default App;
