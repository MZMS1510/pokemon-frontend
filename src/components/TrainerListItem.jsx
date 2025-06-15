import { Link } from "react-router-dom";

export default function TrainerListItem({ item: trainer = {} }) {
  const { id, name, badges, money } = trainer;
  return (
    <li
      key={name}
      className="flex flex-col mb-4 w-full justify-center p-4 rounded-lg bg-green-600 hover:bg-green-700 hover:cursor-pointer transition duration-300"
    >
      <Link to={`/trainers/${id}`}>
        <p className="text-xl font-bold text-center">{name}</p>
        <div className="flex justify-center mt-4 gap-5 text-xl">
          <p className="text-xl w-1/3 text-center">Badges: {badges}</p>
          <p className="text-xl w-1/3 text-center">Money: {money}</p>
        </div>
      </Link>
    </li>
  );
}
