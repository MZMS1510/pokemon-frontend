import { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import ItemListItem from "../components/ItemListItem";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/items");
        setItems(response.data);
      } catch (err) {
        setError("Failed to fetch items data");
        console.error("Error fetching items:", err);
        // Fallback to static data if API fails
        setItems([
          {
            id: 1,
            name: "Poké Ball",
            type: "pokeball",
            price: 200,
            description:
              "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon.",
          },
          {
            id: 2,
            name: "Great Ball",
            type: "pokeball",
            price: 600,
            description:
              "A good, high-performance Poké Ball that provides a higher catch rate than a standard Poké Ball.",
          },
          {
            id: 3,
            name: "Ultra Ball",
            type: "pokeball",
            price: 1200,
            description:
              "An ultra-high performance Poké Ball that provides an even higher catch rate than a Great Ball.",
          },
          {
            id: 4,
            name: "Master Ball",
            type: "pokeball",
            price: 99999,
            description:
              "The best Poké Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",
          },
          {
            id: 5,
            name: "Potion",
            type: "healing",
            price: 300,
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by just 20 points.",
          },
          {
            id: 6,
            name: "Super Potion",
            type: "healing",
            price: 700,
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by 50 points.",
          },
          {
            id: 7,
            name: "Hyper Potion",
            type: "healing",
            price: 1200,
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by 200 points.",
          },
          {
            id: 8,
            name: "Max Potion",
            type: "healing",
            price: 2500,
            description:
              "A spray-type medicine for wounds. It completely restores the HP of a single Pokémon.",
          },
          {
            id: 9,
            name: "Revive",
            type: "healing",
            price: 1500,
            description:
              "A medicine that revives a fainted Pokémon. It restores half the Pokémon's maximum HP.",
          },
          {
            id: 10,
            name: "Rare Candy",
            type: "enhancement",
            price: 4800,
            description:
              "A candy that is packed with energy. It raises the level of a single Pokémon by one.",
          },
          {
            id: 11,
            name: "X Attack",
            type: "battle",
            price: 500,
            description:
              "An item that raises the Attack stat of a Pokémon in battle. It wears off if the Pokémon is withdrawn.",
          },
          {
            id: 12,
            name: "X Defense",
            type: "battle",
            price: 550,
            description:
              "An item that raises the Defense stat of a Pokémon in battle. It wears off if the Pokémon is withdrawn.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold my-5 text-center">Items</h1>
        <p>Loading items...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Items</h1>
      {error && (
        <div className="text-center text-red-500 mb-4">
          {error} (Using fallback data)
        </div>
      )}
      <div className="flex justify-center w-full">
        <List items={items} ListItem={ItemListItem} />
      </div>
    </>
  );
}
