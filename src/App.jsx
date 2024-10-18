import { useState, useEffect } from "react";
import { getPets } from "./services/petService.js";
import { Routes, Route } from "react-router-dom";
import PetList from "./components/PetList.jsx";
import PetDetail from "./components/PetDetail.jsx";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
        <Route path="/pets/:petId" element={<PetDetail />} />
      </Routes>
    </>
  );
}

export default App;