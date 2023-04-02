import React, {useContext} from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>username: {username}</p>
        <p>id: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button> 
    </div>
  );
};



export default Card;
