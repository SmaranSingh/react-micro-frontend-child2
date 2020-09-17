import React from "react";
import logo from "./logo.svg";
import "./App.css";

const { REACT_APP_CHILD2_HOST: host } = process.env;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={`${host}${logo}`} className='App-logo' alt='logo' />
        <p>Child 2</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
