import React, { useState } from 'react';
import Game from './Game';

const GameList = ({ games }) => {
 const [sortBy, setSortBy] = useState('name');

 const sortedGames = [...games].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
 });

 return (
 <div>
     <h2 className="text-xl font-bold">Sort by:</h2>
     <div className="space-x-4">
       <button onClick={() => setSortBy('name')} className="bg-orange-500 p-1 m-2 w-28" style={{backgroundColor: sortBy === 'name' ? 'orange' : 'darkorange'}}>Name</button>
       <button onClick={() => setSortBy('category')} className="bg-orange-500 p-1 m-2 w-28" style={{backgroundColor: sortBy === 'category' ? 'orange' : 'darkorange'}}>Category</button>
     </div>
     <ul>
       {sortedGames.map(game => (
         <Game key={game.id} name={game.name} platform={game.platform} category={game.category} />
       ))}
     </ul>
 </div>
 );
};

export default GameList;
