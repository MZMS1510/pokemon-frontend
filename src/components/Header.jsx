export default function Header() {
  return (
    <nav className="flex justify-between items-center p-5">
      <a className="hover:underline" href="#">
        Home
      </a>
      <a className="hover:underline" href="#">
        Pokédex
      </a>
      <a className="hover:underline" href="#">
        Trainers
      </a>
      <a className="hover:underline" href="#">
        Teams
      </a>
      <a className="hover:underline" href="#">
        Items
      </a>
    </nav>
  );
}
