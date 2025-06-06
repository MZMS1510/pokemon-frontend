export default function PokemonListItem({ pokemon = {} }) {
  const { name, id } = pokemon;

  return (
    <li className="flex flex-col mb-4 w-full justify-center p-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer transition duration-300">
      <div className="text-2xl flex justify-start gap-5">
        <p className="opacity-80">#{id}</p>
        <p>{name}</p>
      </div>
      <div className="flex justify-center mt-4 gap-5 text-xl">
        <p className="border-2 border-white w-1/3 text-center rounded-4xl p-2">
          Tipo 1
        </p>
        <p className="border-2 border-white w-1/3 text-center rounded-4xl p-2">
          Tipo 2
        </p>
      </div>
    </li>
  );
}
