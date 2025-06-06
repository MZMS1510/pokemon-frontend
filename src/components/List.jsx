export default function List({ items = [], ListItem = null }) {
  return (
    <ul className="flex w-full flex-col min-w-56 items-center gap-3 p-4 max-w-xl">
      {items.map((item) =>
        ListItem !== null ? ListItem({ item: item }) : <li>{item}</li>
      )}
    </ul>
  );
}
