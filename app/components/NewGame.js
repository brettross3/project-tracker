import { useState } from "react";

export default function NewGame({ onAddGame }) {
 const [name, setName] = useState("");
 const [platform, setPlatform] = useState("");
 const [category, setCategory] = useState("");

 const handleSubmit = (event) => {
    event.preventDefault();
    const game = { id: Math.random().toString(36).substr(2, 9), name, platform, category };
    onAddGame(game);
    setName("");
    setPlatform("Pick a Platform");
    setCategory("Category");
 };

    return (
        <div className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
    
            {/* Platform Field */}
            <div className="mb-4">
              <label htmlFor="platform" className="block text-sm font-medium text-gray-600">
                Platform:
              </label>
              <select
                id="platform"
                name="platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="" disabled>Pick the Game's Platform</option>
                <option value="PC">PC</option>
                <option value="PS4">PS4</option>
                <option value="Xbox One">Xbox One</option>
                <option value="PS5">PS5</option>
                <option value="Xbox Series">Xbox Series</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
                <option value="Other">Other</option>
              </select>
            </div>
    
            {/* Category Field */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="" disabled>Select a category</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Simulation">Simulation</option>
                <option value="Sports">Sports</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Indie">Indie</option>
                <option value="Other">Other</option>
              </select>
            </div>
    
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-black p-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      );
    }
