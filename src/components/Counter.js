import React from 'react';
import PropTypes from 'prop-types'; // for type-checking

//class Counter extends Component {
function Counter({index, score, changeScore}) { // original parameter 'props' destructured here
    return (
      <div className="counter">
        <button 
          className="counter-action decrement" 
          onClick={() => changeScore(index, -1)}
          > - </button>
        <span className="counter-score">{score}</span>
        <button 
          className="counter-action increment"
          onClick={() => changeScore(index, 1)}
          > + </button>
      </div>
    );
}

// Tell React which type each prop is:
// ref: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;