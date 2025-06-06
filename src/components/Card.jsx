export default function Card({ children }) {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 m-2 w-1/3">
      {children}
    </div>
  );
}
