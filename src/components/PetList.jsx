import { Link } from "react-router-dom";

function PetList({ pets }) {
  return (
    <div>
      <h1>Pet List</h1>
      {pets.length ? (
        <ul>
          {pets.map((pet) => (
            <Link to={`/pets/${pet._id}`}>
              <li key={pet._id}>{pet.name}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <h2>No pets!</h2>
      )}
    </div>
  );
}

export default PetList;