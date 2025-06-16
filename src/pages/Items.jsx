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
        const response = await axios.get(
          "http://localhost:3000/api/item-types"
        );
        // Transform the data to match what ItemListItem expects
        const transformedItems = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          type: item.itemCategory?.name || "unknown",
          description: item.description || "No description available.",
          effect: item.effect,
        }));
        setItems(transformedItems);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch items data");
        console.error("Error fetching items:", err); // Fallback to static data if API fails
        setItems([
          {
            id: 1,
            name: "Poké Ball",
            type: "pokéballs",
            description:
              "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon.",
          },
          {
            id: 2,
            name: "Great Ball",
            type: "pokéballs",
            description:
              "A good, high-performance Poké Ball that provides a higher catch rate than a standard Poké Ball.",
          },
          {
            id: 3,
            name: "Ultra Ball",
            type: "pokéballs",
            description:
              "An ultra-high performance Poké Ball that provides an even higher catch rate than a Great Ball.",
          },
          {
            id: 4,
            name: "Master Ball",
            type: "pokéballs",
            description:
              "The best Poké Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",
          },
          {
            id: 5,
            name: "Potion",
            type: "medicine",
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by just 20 points.",
          },
          {
            id: 6,
            name: "Super Potion",
            type: "medicine",
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by 50 points.",
          },
          {
            id: 7,
            name: "Hyper Potion",
            type: "medicine",
            description:
              "A spray-type medicine for wounds. It restores the HP of one Pokémon by 200 points.",
          },
          {
            id: 8,
            name: "Max Potion",
            type: "medicine",
            description:
              "A spray-type medicine for wounds. It completely restores the HP of a single Pokémon.",
          },
          {
            id: 9,
            name: "Revive",
            type: "medicine",
            description:
              "A medicine that revives a fainted Pokémon. It restores half the Pokémon's maximum HP.",
          },
          {
            id: 10,
            name: "Rare Candy",
            type: "vitamins",
            description:
              "A candy that is packed with energy. It raises the level of a single Pokémon by one.",
          },
          {
            id: 11,
            name: "X Attack",
            type: "battle items",
            description:
              "An item that raises the Attack stat of a Pokémon in battle. It wears off if the Pokémon is withdrawn.",
          },
          {
            id: 12,
            name: "X Defense",
            type: "battle items",
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
