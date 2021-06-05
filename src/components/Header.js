import React from 'react';
import PropTypes from 'prop-types'; // for type-checking
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => { // in situ destructuring assignment
  // the above destructuring assignment is the equivalent of:
  // const { players, title } = props;
  return (
    <header>
      <Stats
        players={ players }
      />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

// Tell React which type each prop is:
// ref: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

// PropTypes can have a default value which is only used if no prop is 
// specified
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;