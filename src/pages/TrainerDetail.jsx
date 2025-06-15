import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/trainers"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Trainers
      </Link>

      <div className="bg-gray-400 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4">{trainer.name}</h1>
        <p className="text-xl mb-2">Money: {trainer.money}</p>
        {/* Adicione mais campos conforme sua estrutura de dados */}
      </div>
    </div>
  );
}
