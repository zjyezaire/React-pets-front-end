import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPet } from "../services/petService.js";

function PetDetail() {
  const [pet, setPet] = useState({});

  const { petId } = useParams();

  const fetchPet = async () => {
    try {
      const petData = await getPet(petId);
      setPet(petData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPet();
  }, []);

  return (
    <div>
      <h1>{pet.name}</h1>
      <h2>Breed: {pet.breed}</h2>
      <h2>
        Age: {pet.age} year{pet.age > 1 ? "s" : ""} old
      </h2>
    </div>
  );
}

export default PetDetail;