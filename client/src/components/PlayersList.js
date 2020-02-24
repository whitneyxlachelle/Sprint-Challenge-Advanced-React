import React from 'react';
import PlayersCard from './PlayersCard';


const PlayersList = props => {
    //console.log(props);
    return (
<div className="players-list">
    {props.players.map(player => {
        return <PlayersCard key={player.id} player={player} />
    })}
</div>
    )
}

export default PlayersList; 
