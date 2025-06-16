export default function Card({ children }) {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 w-full min-w-64 max-w-sm mx-auto">
      {children}
    </div>
  );
}
