import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import ItemListItem from "../components/ItemListItem";

export default function TrainerDetail() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/trainers/${id}`
        );
        setTrainer(response.data);
      } catch (err) {
        setError("Failed to fetch trainer details");
        console.error("Error fetching trainer:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainer();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!trainer)
    return <div className="text-center mt-10">Trainer not found</div>;

  // Extract team Pokemon
  const teamPokemon = [];
  if (trainer.team) {
    const pokemonSlots = [
      "pokemon1",
      "pokemon2",
      "pokemon3",
      "pokemon4",
      "pokemon5",
      "pokemon6",
    ];
    pokemonSlots.forEach((slot) => {
      if (trainer.team[slot]) {
        teamPokemon.push(trainer.team[slot]);
      }
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/trainers"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Trainers
      </Link>

      {/* Trainer Info */}
      <div className="bg-gray-400 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4">{trainer.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="text-xl">💰 Money: ${trainer.money}</p>
          <p className="text-xl">🏆 Badges: {trainer.badges}</p>
          <p className="text-xl">👥 Team Size: {teamPokemon.length}/6</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Team</h2>
        {teamPokemon.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamPokemon.map((pokemon, index) => (
              <PokemonCard key={pokemon.id || index} pokemon={pokemon} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              This trainer has no Pokemon in their team yet.
            </p>
          </div>
        )}
      </div>

      {/* Items Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Items</h2>
        {trainer.items && trainer.items.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainer.items.map((item) => (
              <ItemListItem
                key={item.id}
                item={{
                  id: item.id,
                  name: item.itemType?.name || "Unknown Item",
                  type: item.itemType?.itemCategory?.name || "unknown",
                  price: item.itemType?.price || 0,
                  description:
                    item.itemType?.description || "No description available",
                  quantity: item.quantity || 1,
                }}
              />
            ))}
          </ul>
        ) : (
          <div className="text-center py-8 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              This trainer has no items in their inventory.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
