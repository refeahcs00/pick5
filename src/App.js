// import logo from './logo.svg';
import './App.css';
import './Scorebar.css';
import './Game.css';
import React from 'react';

const players = [
  {name: 'Owen Schaefer', dob: '05-06-1998', sex: 'male', score: 89},
  {name: 'Bobby Piccerillo', dob: '10-22-1997', sex: 'male', score: 54},
  {name: 'Nick Zuchelli', dob: '10-22-1997', sex: 'male', score: 62},
  {name: 'MaryKate Robinson', dob: '01-24-1996', sex: 'female', score: 32},
]

const games = [
  {home: {team: 'Pittsburgh Steelers', score: 24}, away: {team: 'Baltimore Ravens', score: 10}},
  {home: {team: 'Philadelphia Eagles', score: 0}, away: {team: 'Detriot Lions', score: 99}},
  {home: {team: 'Buffalo Bills', score: 43}, away: {team: 'New York Jets', score: 21}},
  {home: {team: 'Buccaneers', score: 52}, away: {team: 'Rams', score: 33}}
]

class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <div className="TeamScore">
          <label>{this.props.away.team}</label>
          <label>{this.props.away.score}</label>
        </div>
        <div className="TeamScore">
          <label>{this.props.home.team}</label>
          <label>{this.props.home.score}</label>
        </div>
      </div>
    );
  }
}

class Scorebar extends React.Component {
  render() {
    const game_list = this.props.games.map((x) => 
      <a href="#game">
        <Game home={x.home} away={x.away} />
      </a>
    );

    return (
      <div className="Scorebar">
        {game_list}
      </div>
    );
  }
}

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
    <div>
      <Scorebar games={games} />
      <Leaderboard board={players} />
    </div>
  );
}

export default App;
