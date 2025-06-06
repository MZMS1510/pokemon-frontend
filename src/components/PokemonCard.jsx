import Card from "./Card";

export default function PokemonCard({ pokemon = {} }) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold">{pokemon.species || "Espécie"}</h2>
        <p>Nome</p>
        <p>tipo1</p>
        <p>tipo2</p>
      </div>
    </Card>
  );
}
