import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function PokemonCard({ pokemon = {} }) {
  const [spriteUrl, setSpriteUrl] = useState("");

  const species = pokemon.pokemonSpecies || {};
  const primaryType = species.primaryType || {};
  const secondaryType = species.secondaryType || {};

  useEffect(() => {
    const fetchSprite = async () => {
      if (species.pokedex_id) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${species.pokedex_id}`
          );

          setSpriteUrl(
            response.data.sprites.other["official-artwork"].front_default
          );
        } catch (err) {
          console.error("Error fetching sprite:", err);
        }
      }
    };

    fetchSprite();
  }, [species.pokedex_id]);

  if (!pokemon) return null;

  const getTypeColor = (typeName) => {
    const colors = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-300",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-800",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-700",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };
    return colors[typeName?.toLowerCase()] || "bg-gray-400";
  };
  return (
    <Card>
      <div className="flex flex-col items-center p-4 min-h-80">
        {/* Pokemon Image */}
        {spriteUrl && (
          <div className="mb-4 flex-shrink-0">
            <img
              src={spriteUrl}
              alt={`${species.name || "Pokemon"} sprite`}
              className="w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between w-full">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold mb-2 break-words">
              {species.name || "Unknown Species"}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Nickname: {pokemon.nickname || "None"}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Level: {pokemon.level || 1}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {primaryType.name && (
              <span
                className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(
                  primaryType.name
                )}`}
              >
                {primaryType.name}
              </span>
            )}
            {secondaryType.name && (
              <span
                className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(
                  secondaryType.name
                )}`}
              >
                {secondaryType.name}
              </span>
            )}
          </div>

          <div className="text-xs text-center text-gray-500 space-y-1">
            <p>HP: {pokemon.hp || species.base_hp || "?"}</p>
            <p>Attack: {pokemon.atk || species.base_atk || "?"}</p>
            <p>Defense: {pokemon.def || species.base_def || "?"}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
