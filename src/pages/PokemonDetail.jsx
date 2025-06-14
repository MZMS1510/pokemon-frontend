import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/pokemon-species/pokedex/${id}`
        );
        setPokemon(response.data);
      } catch (err) {
        setError("Failed to fetch Pokemon details");
        console.error("Error fetching Pokemon:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!pokemon)
    return <div className="text-center mt-10">Pokemon not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/pokedex"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Pokedex
      </Link>

      <div className="bg-gray-400 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4">{pokemon.name}</h1>
        <p className="text-xl mb-2">Pokedex ID: #{pokemon.pokedex_id}</p>

        <div className="mb-4">
          <span className="font-semibold">Type(s): </span>
          <span className="bg-blue-300 px-2 py-1 rounded mr-2 text-black">
            {pokemon.primaryType?.name}
          </span>
          {pokemon.secondaryType && (
            <span className="bg-green-300 px-2 py-1 rounded text-black">
              {pokemon.secondaryType.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
