import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <nav className="flex justify-between items-center p-5 max-w-4xl w-full">
        <Link className="hover:underline" to="/home">
          Home
        </Link>
        <Link className="hover:underline" to="/pokedex">
          Pokédex
        </Link>
        <Link className="hover:underline" to="/trainers">
          Trainers
        </Link>
        <Link className="hover:underline" to="/teams">
          Teams
        </Link>
        <Link className="hover:underline" to="/items">
          Items
        </Link>
        <Link className="hover:underline" to="/items">
          Contact
        </Link>
      </nav>
    </header>
  );
}
