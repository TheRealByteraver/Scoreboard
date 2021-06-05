import React from 'react';
import PropTypes from 'prop-types'; // for type-checking

function Stats(props) {
    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce( (prevVal, player) => (
        prevVal + player.score), 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

// prop types are only checked in dev mode
Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;