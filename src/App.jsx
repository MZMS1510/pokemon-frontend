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

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
