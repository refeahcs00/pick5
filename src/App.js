import logo from './logo.svg';
import './App.css';
import React from 'react';

class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
      </div>
    );
  }
}

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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Leaderboard />
    </div>
  );
}

export default App;
