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
        const sortedPokemon = response.data.sort(
          (a, b) => a.pokedex_id - b.pokedex_id
        );
        setPokemon(sortedPokemon);
      } catch (err) {
        setError("Failed to fetch Pokemon data");
        console.error("Error fetching Pokemon:", err); // Fallback to static data if API fails
        setPokemon([
          {
            name: "Bulbasaur",
            pokedex_id: 1,
            primaryType: { name: "Grass" },
            secondaryType: { name: "Poison" },
          },
          {
            name: "Charmander",
            pokedex_id: 4,
            primaryType: { name: "Fire" },
            secondaryType: null,
          },
          {
            name: "Squirtle",
            pokedex_id: 7,
            primaryType: { name: "Water" },
            secondaryType: null,
          },
          {
            name: "Pidgey",
            pokedex_id: 16,
            primaryType: { name: "Normal" },
            secondaryType: { name: "Flying" },
          },
          {
            name: "Rattata",
            pokedex_id: 19,
            primaryType: { name: "Normal" },
            secondaryType: null,
          },
          {
            name: "Jigglypuff",
            pokedex_id: 39,
            primaryType: { name: "Normal" },
            secondaryType: { name: "Fairy" },
          },
          {
            name: "Meowth",
            pokedex_id: 52,
            primaryType: { name: "Normal" },
            secondaryType: null,
          },
          {
            name: "Psyduck",
            pokedex_id: 54,
            primaryType: { name: "Water" },
            secondaryType: null,
          },
          {
            name: "Machop",
            pokedex_id: 66,
            primaryType: { name: "Fighting" },
            secondaryType: null,
          },
          {
            name: "Magnemite",
            pokedex_id: 81,
            primaryType: { name: "Electric" },
            secondaryType: { name: "Steel" },
          },
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
