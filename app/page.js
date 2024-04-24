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
      {/* Display the game count next to the Game List header */}
      <h1 className="text-3xl font-bold mb-4">
        Game List ({gameCount})
      </h1>
      {/* Render the NewGame component and pass the handleAddGame function as a prop */}
      <NewGame onAddGame={handleAddGame} />
      {/* Render the GameList component and pass the games state as a prop */}
      <GameList games={games} />
    </main>
 );
}
