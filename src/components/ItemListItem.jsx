export default function ItemListItem({ item = {} }) {
  const { id, name, type, description } = item;
  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "pokeball":
      case "pokéballs":
        return "bg-red-500";
      case "healing":
      case "medicine":
        return "bg-green-500";
      case "enhancement":
      case "vitamins":
        return "bg-purple-500";
      case "battle":
      case "battle items":
        return "bg-orange-500";
      case "berries":
        return "bg-pink-500";
      case "tms":
      case "technical machines":
        return "bg-blue-500";
      case "unknown":
        return "bg-gray-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <li
      key={id}
      className={`flex flex-col mb-4 w-full justify-center p-4 rounded-lg ${getTypeColor(
        type
      )}`}
    >
      <div className="text-2xl flex justify-start gap-5 text-white">
        <p className="font-bold text-center w-full">{name}</p>
      </div>
      <div className="flex justify-center mt-2 gap-5 text-lg text-white">
        <p className="border-2 border-white w-full text-center rounded-lg p-2 capitalize">
          {type && type !== "unknown" ? type : "Unknown Category"}
        </p>
      </div>
      <div className="mt-3 text-center text-white opacity-90">
        <p className="text-sm">{description || "No description available."}</p>
      </div>
    </li>
  );
}
