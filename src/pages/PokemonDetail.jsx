import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PokemonDetail() {
  let typeBorderColor = {
    Fire: "border-red-500",
    Water: "border-blue-500",
    Grass: "border-green-500",
    Electric: "border-yellow-500",
    Psychic: "border-purple-500",
    Ice: "border-cyan-500",
    Dragon: "border-orange-500",
    Dark: "border-gray-800",
    Fairy: "border-pink-500",
    Fighting: "border-red-700",
    Flying: "border-blue-300",
    Poison: "border-purple-700",
    Ground: "border-amber-500",
    Rock: "border-yellow-700",
    Bug: "border-green-700",
    Ghost: "border-indigo-800",
    Steel: "border-gray-400",
    Normal: "border-gray-200",
    Default: "border-white",
  };

  let typeBackgroundColor = {
    Fire: "bg-red-300",
    Water: "bg-blue-300",
    Grass: "bg-green-300",
    Electric: "bg-yellow-300",
    Psychic: "bg-purple-300",
    Ice: "bg-cyan-300",
    Dragon: "bg-orange-300",
    Dark: "bg-gray-500",
    Fairy: "bg-pink-300",
    Fighting: "bg-red-400",
    Flying: "bg-blue-200",
    Poison: "bg-purple-400",
    Ground: "bg-amber-300",
    Rock: "bg-yellow-400",
    Bug: "bg-green-400",
    Ghost: "bg-indigo-500",
    Steel: "bg-gray-300",
    Normal: "bg-gray-100",
    Default: "bg-gray-100",
  };

  let containerBackgroundColor = {
    Fire: "bg-red-400",
    Water: "bg-blue-400",
    Grass: "bg-green-400",
    Electric: "bg-yellow-400",
    Psychic: "bg-purple-400",
    Ice: "bg-cyan-400",
    Dragon: "bg-orange-400",
    Dark: "bg-gray-600",
    Fairy: "bg-pink-400",
    Fighting: "bg-red-500",
    Flying: "bg-blue-300",
    Poison: "bg-purple-500",
    Ground: "bg-amber-400",
    Rock: "bg-yellow-500",
    Bug: "bg-green-500",
    Ghost: "bg-indigo-600",
    Steel: "bg-gray-400",
    Normal: "bg-gray-200",
    Default: "bg-gray-200",
  };

  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [spriteUrl, setSpriteUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/pokemon-species/pokedex/${id}`
        );
        setPokemon(response.data);
      } catch (err) {
        setError("Failed to fetch Pokemon details");
        console.error("Error fetching Pokemon:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchSprite = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        setSpriteUrl(
          response.data.sprites.other["official-artwork"].front_default
        );
      } catch (err) {
        console.error("Error fetching sprite:", err);
      }
    };

    fetchPokemon();
    fetchSprite();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!pokemon)
    return <div className="text-center mt-10">Pokemon not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/pokedex"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Pokedex
      </Link>

      <div
        className={`${
          containerBackgroundColor[pokemon.primaryType.name]
        } rounded-lg shadow-lg p-6`}
      >
        <div className=" w-1/4 m-auto flex flex-col gap-4 items-center">
          <img
            src={spriteUrl}
            alt={pokemon.name}
            className="bg-white min-w-48 p-4 rounded-full bg-blend-soft-light"
          />
          <h1 className="text-4xl font-bold mb-4">{pokemon.name}</h1>
        </div>

        <div className="w-full flex max-w-xl m-auto justify-center">
          <span
            className={`${typeBackgroundColor[pokemon.primaryType.name]} ${
              typeBorderColor[pokemon.primaryType.name]
            } font-bold border-2 px-2 py-1 rounded-full text-center w-full mr-2`}
          >
            {pokemon.primaryType?.name}
          </span>
          {pokemon.secondaryType && (
            <span
              className={`${typeBackgroundColor[pokemon.secondaryType.name]} ${
                typeBorderColor[pokemon.secondaryType.name]
              } font-bold border-2 px-2 py-1 rounded-full text-center w-full`}
            >
              {pokemon.secondaryType.name}
            </span>
          )}
        </div>

        <br />

        <div className="rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Base Stats:</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 max-w-xl m-auto">
            <div className="p-3 rounded border-2">
              <span className="font-semibold">HP:</span> {pokemon.base_hp}
            </div>
            <div className="p-3 rounded border-2">
              <span className="font-semibold">Attack:</span> {pokemon.base_atk}
            </div>
            <div className="p-3 rounded border-2">
              <span className="font-semibold">Defense:</span> {pokemon.base_def}
            </div>
            <div className="p-3 rounded border-2">
              <span className="font-semibold">Special Attack:</span>{" "}
              {pokemon.base_sp_atk}
            </div>
            <div className="p-3 rounded border-2">
              <span className="font-semibold">Special Defense:</span>{" "}
              {pokemon.base_sp_def}
            </div>
            <div className="p-3 rounded border-2">
              <span className="font-semibold">Speed:</span> {pokemon.base_speed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
