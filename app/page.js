"use client";
import React, { useState, useEffect } from "react";
import NewGame from "./components/NewGame";
import GameList from "./components/GameList";

export default function Page() {
 // State to hold the list of games
 const [games, setGames] = useState([]);
 // State to hold the count of games
 const [gameCount, setGameCount] = useState(0);

 useEffect(() => {
    setGameCount(games.length);
 }, [games]);

 const handleAddGame = (game) => {
    setGames([...games, game]);
 };

 return (
  <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Game List: {gameCount === 0 ? '' : `${gameCount} ${gameCount === 1 ? 'title' : 'titles'}`}
      </h1>
      <NewGame onAddGame={handleAddGame} />
      <GameList games={games} />
    </main>
 );
}
