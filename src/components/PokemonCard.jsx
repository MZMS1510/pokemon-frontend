import Card from "./Card";

export default function PokemonCard({ pokemon = {} }) {
  if (!pokemon) return null;

  const species = pokemon.pokemonSpecies || {};
  const primaryType = species.primaryType || {};
  const secondaryType = species.secondaryType || {};

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
      <div className="flex flex-col items-center p-4">
        <h3 className="text-lg font-bold mb-2">
          {species.name || "Unknown Species"}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Nickname: {pokemon.nickname || "None"}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Level: {pokemon.level || 1}
        </p>

        <div className="flex gap-2 mb-3">
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

        <div className="text-xs text-center text-gray-500">
          <p>HP: {pokemon.hp || species.base_hp || "?"}</p>
          <p>Attack: {pokemon.attack || species.base_attack || "?"}</p>
          <p>Defense: {pokemon.defense || species.base_defense || "?"}</p>
        </div>
      </div>
    </Card>
  );
}
