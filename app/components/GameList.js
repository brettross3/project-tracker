import React, { useState } from 'react';
import Game from './Game';

const GameList = ({ games }) => {
 const [sortBy, setSortBy] = useState('name');

 const sortedGames = [...games].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'category') {
        return a.platform.localeCompare(b.platform);
    }
 });

 return (
 <div>
     <h2 className="text-xl font-bold">Sort by:</h2>
     <div className="">
       <button onClick={() => setSortBy('name')} className="p-1 m-2 w-28 shadow-md rounded-md" style={{backgroundColor: sortBy === 'name' ? '#63d471' : '#7d8491'}}>Name</button>
       <button onClick={() => setSortBy('category')} className="p-1 m-2 w-28 shadow-md rounded-md" style={{backgroundColor: sortBy === 'category' ? '#63d471' : '#7d8491'}}>Category</button>
       <button onClick={() => setSortBy('platform')} className="p-1 m-2 w-28 shadow-md rounded-md" style={{backgroundColor: sortBy === 'platform' ? '#63d471' : '#7d8491'}}>Platform</button>
     </div>
     <ul className="gameBox">
       {sortedGames.map(game => (
         <Game key={game.id} name={game.name} platform={game.platform} category={game.category} />
       ))}
     </ul>
 </div>
 );
};

export default GameList;
