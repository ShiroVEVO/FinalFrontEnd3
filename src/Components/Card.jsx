import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];// Obtener la lista de favoritos actual de la localstore

    if (favorites.includes(id)) {// Verificar si el id de la card ya se encuentra en la lista, si lo esta se elimina, si no se agrega
      const updatedFavorites = favorites.filter((fav) => fav !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFav(false);
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFav(true);
    }
  };

  useEffect(() => {// Verificar si el id de la card ya se encuentra en la lista de favoritos
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favorites.includes(id));
  }, [id]);

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>username: {username}</p>
        <p>id: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">{isFav ? "Remove fav" : "Add fav"}</button> 
    </div>
  );
};



export default Card;
