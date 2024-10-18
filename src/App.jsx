import { useState, useEffect } from "react";
import { getPets } from "./services/petService.js";
import { Routes, Route, Link } from "react-router-dom";
import PetList from "./components/PetList.jsx";
import PetDetail from "./components/PetDetail.jsx";
import PetForm from "./components/PetForm.jsx";
import PetEdit from "./components/PetEdit.jsx";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [toggle, setToggle] = useState(false);

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
  }, [toggle]);

  return (
    <>
      <nav>
        <h1>Welcome to Pets Frontend</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/add-pet">Add a Pet</Link>
        </p>
      </nav>
      <Routes>
        <Route path="/" element={<PetList pets={pets} />} />
        <Route path="/pets/:petId" element={<PetDetail setToggle={setToggle} />} />
        <Route path="/add-pet" element={<PetForm setToggle={setToggle} />} />
        <Route
          path="/pets/:petId/edit"
          element={<PetEdit setToggle={setToggle} />}
        />
      </Routes>
    </>
  );
}

export default App;