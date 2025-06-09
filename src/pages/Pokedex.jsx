import { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import PokemonListItem from "../components/PokemonListItem";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:3000/api/pokemon-species"
        );
        setPokemon(response.data);
      } catch (err) {
        setError("Failed to fetch Pokemon data");
        console.error("Error fetching Pokemon:", err);
        // Fallback to static data if API fails
        setPokemon([
          { name: "Bulbasaur", id: 1 },
          { name: "Charmander", id: 4 },
          { name: "Squirtle", id: 7 },
          { name: "Pidgey", id: 16 },
          { name: "Rattata", id: 19 },
          { name: "Jigglypuff", id: 39 },
          { name: "Meowth", id: 52 },
          { name: "Psyduck", id: 54 },
          { name: "Machop", id: 66 },
          { name: "Magnemite", id: 81 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold my-5 text-center">Pokedex</h1>
        <p>Loading Pokemon...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Pokedex</h1>
      {error && (
        <div className="text-center text-red-500 mb-4">
          {error} (Using fallback data)
        </div>
      )}
      <div className="flex justify-center w-full">
        <List items={pokemon} ListItem={PokemonListItem} />
      </div>
    </>
  );
}
