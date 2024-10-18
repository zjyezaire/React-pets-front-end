import { useState, useEffect } from "react";
import { updatePet, getPet } from "../services/petService.js";
import { useNavigate, useParams } from "react-router-dom";

function PetEdit({ setToggle }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  const { petId } = useParams();
  const navigate = useNavigate();

  const fetchPet = async () => {
    try {
      const petData = await getPet(petId);
      setFormData({
        name: petData.name,
        age: petData.age,
        breed: petData.breed,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPet();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePet(petId, formData);
    setToggle((prev) => !prev);
    navigate(`/pets/${petId}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Update Pet</button>
      </form>
    </div>
  );
}

export default PetEdit;