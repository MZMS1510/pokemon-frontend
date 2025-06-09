import { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import TrainerListItem from "../components/TrainerListItem";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/trainers");
        setTrainers(response.data);
      } catch (err) {
        setError("Failed to fetch trainers data");
        console.error("Error fetching trainers:", err);
        // Fallback to static data if API fails
        setTrainers([
          { id: 1, name: "Ash", badges: 8, money: 1500 },
          { id: 2, name: "Blue", badges: 8, money: 2000 },
          { id: 3, name: "Red", badges: 8, money: 2500 },
          { id: 4, name: "Green", badges: 8, money: 1800 },
          { id: 5, name: "Ethan", badges: 8, money: 1200 },
          { id: 6, name: "Brendan", badges: 8, money: 1600 },
          { id: 7, name: "May", badges: 8, money: 1400 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold my-5 text-center">Treinadores</h1>
        <p>Loading trainers...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Treinadores</h1>
      {error && (
        <div className="text-center text-red-500 mb-4">
          {error} (Using fallback data)
        </div>
      )}
      <div className="flex justify-center w-full">
        <List items={trainers} ListItem={TrainerListItem} />
      </div>
    </>
  );
}
