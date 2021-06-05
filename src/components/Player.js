import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; // for type-checking
import Counter from './Counter';
import Icon from './Icon';

// A PureComponent should only contain child components that are also PureComponents.
class Player extends PureComponent {

  // No need to instantiate the class to access propTypes with 'static':
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string.isRequired, // force warning if not used in render()
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    hasHighScore: PropTypes.bool
  }

  render() {
    //console.log(this.props.name + ' rendered'); // only render this player
    const { id,name,score,index,changeScore,removePlayer,hasHighScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon hasHighScore={hasHighScore}/>
          { name }
        </span>
  
        <Counter 
            score={score}
            index={index}
            changeScore={changeScore}
        />
      </div>
    );
  }
}
  
export default Player;