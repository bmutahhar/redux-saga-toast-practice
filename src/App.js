import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { showToast } from "./action";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(showToast("Failed to do something!", "error", 2000));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
