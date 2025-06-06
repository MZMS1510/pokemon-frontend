export default function Header() {
  return (
    <nav className="flex justify-between items-center p-5">
      <a className="hover:underline" href="/home">
        Home
      </a>
      <a className="hover:underline" href="/pokedex">
        Pokédex
      </a>
      <a className="hover:underline" href="/trainers">
        Trainers
      </a>
      <a className="hover:underline" href="/teams">
        Teams
      </a>
      <a className="hover:underline" href="/items">
        Items
      </a>
      <a className="hover:underline" href="/items">
        Contact
      </a>
    </nav>
  );
}
