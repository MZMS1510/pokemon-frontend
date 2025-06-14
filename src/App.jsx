// import libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import PokemonCard from "./components/PokemonCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import Items from "./pages/Items";
import PokemonDetail from "./pages/PokemonDetail";
import TrainerDetail from "./pages/TrainerDetail";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemons" element={<Pokedex />} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} />
          <Route path="/items" element={<Items />} />
          {/* <Route path="/items/:id" element={<ItemDetails />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
