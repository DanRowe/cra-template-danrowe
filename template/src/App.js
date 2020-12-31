import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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
          rel="noopener noreferrer">
          Learn React
        </a>
        <p style={{ color: "orange" }}>
          Make sure to move eslint dependencies in <code>package.json</code> to devDependencies like
          in <code>example.package.json</code>
        </p>
        &nbsp;
        <small style={{ color: "gray" }}>
          Starter template with Eslint and Prettier created by{" "}
          <a
            className="App-link"
            href="https://github.com/DanRowe"
            target="_blank"
            rel="noopener noreferrer">
            @DanRowe
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
