import './App.css';
import {useState} from "react";

function App() {
   const [value, setVlaue] = useState(0);
    return (
        <div className="App">
          <button onClick={() => {
              setVlaue(value + 1);
          }}>
              {value}
          </button>

            <button onClick={() => {
                setVlaue(0);
            }}>
                Reset
            </button>
            <h4>{value}</h4>
        </div>
    )
};

export default App;
