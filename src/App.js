import logo from './logo.svg';
import './App.css';
import React from 'react';

const players = [
  {name: 'Owen Schaefer', dob: '05-06-1998', sex: 'male', score: 89},
  {name: 'Bobby Piccerillo', dob: '10-22-1997', sex: 'male', score: 54},
  {name: 'Nick Zuchelli', dob: '10-22-1997', sex: 'male', score: 62},
  {name: 'MaryKate Robinson', dob: '01-24-1996', sex: 'female', score: 32},
]

class Leaderboard extends React.Component {
  render() {
    const sorted_board = this.props.board.sort((a, b) => b.score - a.score);
    const jsx_board = sorted_board.map((sorted_board) =>
      <li>{sorted_board.name} - {sorted_board.score}</li>
    );

    return (
      <div>
        <h1>Leaderboard</h1>
        <ol>{jsx_board}</ol>
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
      <Leaderboard board={players} />
    </div>
  );
}

export default App;
