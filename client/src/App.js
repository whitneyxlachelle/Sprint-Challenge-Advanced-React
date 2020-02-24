import React from 'react';
import axios from 'axios';
import PlayersList from './components/PlayersList';

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
    //   <div> {this.state.players.map((player, index) => (
    //   <p className= "info" key={index}> {player.name} is from {player.country}. </p>
    // ))}</div>
    <PlayersList players={this.state.players}/>
    )
  }
}

export default App;
