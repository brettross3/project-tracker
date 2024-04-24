import React from "react";

const Game = ({ name, platform, category }) => {
 return (
    <li className="border p-4 my-2">
      <p className="font-bold">{name}</p>
      <p>Platform: {platform}</p>
      <p>Category: {category}</p>
    </li>
 );
};

export default Game;
