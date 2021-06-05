import React, { Component } from 'react'; // "named" import
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

// no need for React.Component bcoz 'import React, { Component }' statement
class App extends Component { 
  state = {
    players: [{ id: 1, score: 0, name: "Guil" },
              { id: 2, score: 0, name: "Treasure" },
              { id: 3, score: 0, name: "Ashley" },
              { id: 4, score: 0, name: "James" }]
  };

  handleScoreChange = (index, delta) => {

    this.setState(
      prevState => {
        const newStatePlayers = [...prevState.players];
        const newStatePlayer = {...newStatePlayers[index]};
        newStatePlayer.score += delta;
        newStatePlayers[index] = newStatePlayer;
        return {
          players: newStatePlayers
        };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
        const newStatePlayers = [...prevState.players];
        const lastId = newStatePlayers[newStatePlayers.length - 1].id;
        newStatePlayers.push({
          id: lastId + 1,
          score: 0,
          name: name
        });
        return {
          players: newStatePlayers
        };
    });
    
    // teachers' version:
    // this.setState( prevState => {
    //   const lastId = prevState.players[prevState.players.length - 1].id;
    //   return {
    //     players: [
    //       ...this.state.players,
    //       {
    //         name, //  same as 'name: name'
    //         score: 0,
    //         id: lastId + 1
    //       }
    //     ]
    //   }
    // });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    console.log('render triggered');
    let highScore = 0;
    let highScoreExists = false;
    for (const player of this.state.players) {
      highScore = Math.max(highScore, player.score);
      highScoreExists = highScoreExists || (player.score !== 0);
    }

    return (
      <div className="scoreboard">
        <Header 
          title="My Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) => {
          const hasGoldenCrown = (player.score === highScore) && highScoreExists;
          return (
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()} 
              index={index}
              hasHighScore={hasGoldenCrown}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer} 
            />);
          }
        )}
        <AddPlayerForm 
            addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;