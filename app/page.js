"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Fetch function to get random games
const getRandomGames = async () => {
 const response = await fetch("https://www.gamerpower.com/api/giveaways?type=game");
 const data = await response.json();
 return data.slice(0, 10); // Assuming the API returns more than 10 games, we take the first 10
};

// Fetch function to get games by platform
const getGamesByPlatform = async (platform) => {
 const response = await fetch(`https://www.gamerpower.com/api/giveaways?platform=${platform}`);
 const data = await response.json();
 return data.slice(0, 10); // Again, taking the first 10 games
};

export default function Home() {
 const [games, setGames] = useState([]);
 const [platform, setPlatform] = useState("");

 const loadRandomGames = async () => {
    const games = await getRandomGames();
    setGames(games);
 };

 const loadGamesByPlatform = async () => {
    if (!platform) return;
    const games = await getGamesByPlatform(platform);
    setGames(games);
 };

 useEffect(() => {
    loadRandomGames();
 }, []);

 useEffect(() => {
    loadGamesByPlatform();
 }, [platform]);

 return (
    <div>
      <h1>Random Games</h1>
      <button onClick={() => setPlatform("steam")}>Steam</button>
      <button onClick={() => setPlatform("ps5")}>PS5</button>
      <button onClick={() => setPlatform("xbox-one")}>Xbox One</button>
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.title}</li>
        ))}
      </ul>
    </div>
 );
}
