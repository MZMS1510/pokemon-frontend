import List from "../components/List";
import PokemonListItem from "../components/PokemonListItem";

export default function Pokedex() {
  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Pokedex</h1>
      <div className="flex justify-center w-full">
        <List
          items={[
            { name: "Bulbasaur", id: 1 },
            { name: "Charmander", id: 4 },
            { name: "Squirtle", id: 7 },
            { name: "Pidgey", id: 16 },
            { name: "Rattata", id: 19 },
            { name: "Jigglypuff", id: 39 },
            { name: "Meowth", id: 52 },
            { name: "Psyduck", id: 54 },
            { name: "Machop", id: 66 },
            { name: "Magnemite", id: 81 },
          ]}
          ListItem={PokemonListItem}
        />
      </div>
    </>
  );
}
