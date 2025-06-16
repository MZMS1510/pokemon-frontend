import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center h-96 max-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to PokéBase
        </h1>
        <p className="text-lg mb-8 text-center">
          Create teams and learn more about the pokémons!
        </p>
      </div>

      <div className="flex justify-center">
        <Link to={"/pokedex"}>
          <button className="bg-blue-950 p-3 rounded-md hover:bg-blue-900 transition-colors hover:underline hover:cursor-pointer ">
            Learn more about the pokémons
          </button>
        </Link>
      </div>
    </>
  );
}
