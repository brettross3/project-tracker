import React from "react";

const Game = ({ name, platform, category, style }) => {
 return (
    <li className={style}>
      <p className="font-bold">{name}</p>
      <p><span className="italic">Platform:</span> {platform}</p>
      <p><span className="italic">Category:</span> {category}</p>
    </li>
 );
};

export default Game;
