import { Link } from "react-router-dom";

export default function PokemonListItem({ item: pokemon = {} }) {
  const { name, pokedex_id, primaryType, secondaryType } = pokemon;

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

  return (
    <li
      key={pokedex_id}
      className="flex flex-col mb-4 w-full justify-center p-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer transition duration-300"
    >
      <Link to={`/pokemons/${pokedex_id}`}>
        <div className="text-2xl flex justify-start gap-5">
          <p className="opacity-80">#{pokedex_id}</p>
          <p>{name}</p>
        </div>
        <div className="flex justify-center mt-4 gap-5 text-xl">
          {primaryType && (
            <p
              className={`border-2 ${typeBorderColor[primaryType.name]} ${
                typeBackgroundColor[primaryType.name]
              } w-full text-center rounded-4xl p-2`}
            >
              {primaryType.name}
            </p>
          )}
          {secondaryType && (
            <p
              className={`border-2 ${typeBorderColor[secondaryType.name]} ${
                typeBackgroundColor[secondaryType.name]
              } w-full text-center rounded-4xl p-2`}
            >
              {secondaryType.name}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
}
