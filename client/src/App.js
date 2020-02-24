import React from 'react';
import axios from 'axios';
import './App.css';

import PlayersList from './components/PlayersList';
import DarkMode from './components/DarkMode'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(result => {
        this.setState({ players: result.data })
        console.log(result);
      })
      .catch(error => {
        console.log("error", error)
      });
    console.log("componentDidMount is running")
  }

  render() {
    return (
      <div className="App">
      <DarkMode />
      <PlayersList players={this.state.players} />
      </div>
    )
  }
}

export default App;
