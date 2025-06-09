export default function PokemonListItem({ item: pokemon = {} }) {
  const { name, pokedex_id, primaryType, secondaryType } = pokemon;

  return (
    <li
      key={pokedex_id}
      className="flex flex-col mb-4 w-full justify-center p-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer transition duration-300"
    >
      <div className="text-2xl flex justify-start gap-5">
        <p className="opacity-80">#{pokedex_id}</p>
        <p>{name}</p>
      </div>
      <div className="flex justify-center mt-4 gap-5 text-xl">
        {primaryType && (
          <p className="border-2 border-white w-full text-center rounded-4xl p-2">
            {primaryType.name}
          </p>
        )}
        {secondaryType && (
          <p className="border-2 border-white w-full text-center rounded-4xl p-2">
            {secondaryType.name}
          </p>
        )}
      </div>
    </li>
  );
}
