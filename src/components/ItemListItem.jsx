export default function ItemListItem({ item = {} }) {
  const { id, name, type, price, description } = item;

  const getTypeColor = (type) => {
    switch (type) {
      case "pokeball":
        return "bg-red-500";
      case "healing":
        return "bg-green-500";
      case "enhancement":
        return "bg-purple-500";
      case "battle":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <li
      key={id}
      className={`flex flex-col mb-4 w-full justify-center p-4 rounded-lg ${getTypeColor(type)} hover:opacity-80 hover:cursor-pointer transition duration-300`}
    >
      <div className="text-2xl flex justify-start gap-5 text-white">
        <p className="opacity-80">#{id}</p>
        <p className="font-bold">{name}</p>
      </div>
      <div className="flex justify-center mt-2 gap-5 text-lg text-white">
        <p className="border-2 border-white w-1/3 text-center rounded-lg p-2 capitalize">
          {type}
        </p>
        <p className="border-2 border-white w-1/3 text-center rounded-lg p-2">
          ${price}
        </p>
      </div>
      <div className="mt-3 text-center text-white opacity-90">
        <p className="text-sm">{description}</p>
      </div>
    </li>
  );
}
