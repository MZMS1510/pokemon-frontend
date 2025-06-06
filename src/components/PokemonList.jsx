import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons = [] }) {
  return (
    <ul className="flex w-full flex-col min-w-56 items-center gap-3 p-4 max-w-xl">
      {pokemons.map((pokemon) => PokemonListItem({ pokemon }))}
    </ul>
  );
}
