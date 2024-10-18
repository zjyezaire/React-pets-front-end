import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPet, deletePet } from "../services/petService.js";

function PetDetail({ setToggle }) {
  const [pet, setPet] = useState({});

  const { petId } = useParams();
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    await deletePet(petId);
    setToggle((prev) => !prev);
    navigate("/");
  };

  return (
    <div>
      <h1>{pet.name}</h1>
      <h2>Breed: {pet.breed}</h2>
      <h2>
        Age: {pet.age} year{pet.age > 1 ? "s" : ""} old
      </h2>
      <div>
        <Link to={`/pets/${pet._id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PetDetail;