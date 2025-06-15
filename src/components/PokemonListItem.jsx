import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokemonListItem({ item: pokemon = {} }) {
  const { name, pokedex_id, primaryType, secondaryType } = pokemon;
  const [spriteUrl, setSpriteUrl] = useState("");

  useEffect(() => {
    const fetchSprite = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokedex_id}`
        );

        setSpriteUrl(
          response.data.sprites.other["official-artwork"].front_default
        );
      } catch (err) {
        console.error("Error fetching sprite:", err);
      }
    };

    fetchSprite();
  }, [pokedex_id]);

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

  return (
    <li
      key={pokedex_id}
      className={`flex flex-col mb-4 w-full justify-center p-4 rounded-lg ${
        containerBackgroundColor[primaryType.name]
      } hover:outline-2 hover:cursor-pointer transition duration-300`}
    >
      <Link to={`/pokemons/${pokedex_id}`}>
        <div className="flex justify-start items-center gap-5">
          <img
            src={spriteUrl}
            alt={`${name} sprite`}
            className="max-w-32 w-1/4"
          />
          <p className="opacity-80 text-xl">#{pokedex_id}</p>
          <p className="font-bold text-4xl">{name}</p>
        </div>
        <div className="flex justify-center mt-4 gap-5 text-xl">
          {primaryType && (
            <p
              className={`border-2 ${typeBorderColor[primaryType.name]} ${
                typeBackgroundColor[primaryType.name]
              } font-bold w-full text-center rounded-4xl p-2`}
            >
              {primaryType.name}
            </p>
          )}
          {secondaryType && (
            <p
              className={`border-2 ${typeBorderColor[secondaryType.name]} ${
                typeBackgroundColor[secondaryType.name]
              } font-bold w-full text-center rounded-4xl p-2`}
            >
              {secondaryType.name}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}
