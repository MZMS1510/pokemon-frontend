export default function PokemonListItem({ pokemon = {} }) {
  const { name, id } = pokemon;

  return (
    <li className="flex flex-col w-full justify-center p-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer transition duration-300">
      <p>#{id}</p>
      <p>{name}</p>
    </li>
  );
}
