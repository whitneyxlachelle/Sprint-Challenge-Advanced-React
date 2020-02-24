import React from "react";

const PlayersCard = props => {
    //console.log(props);
    return (
        <div className="players">
           <h1>Name: {props.player.name} </h1>
           <h2>Country: {props.player.country} </h2>
        </div>
    )
}

export default PlayersCard;  