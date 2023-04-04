// Importes necesarios de react
import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";

//Importes necesarios de contextos
import ThemeContext from "../contexts/ThemeContext";

const Card = ({ name, username, id }) => {
  //Declaraciones necesarias
  const [isFav, setIsFav] = useState(false);
  const {theme} = useContext(ThemeContext);
  
  // Función que permite agregar a favoritos un usuario
  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];// Obtener la lista de favoritos actual de la localstore

    if (favorites.includes(id)) {// Verificar si el id ya se encuentra en la lista, si lo esta se elimina, si no se agrega
      const updatedFavorites = favorites.filter((fav) => fav !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFav(false);
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFav(true);
    }
  };

  // Verificar si el id de la card ya se encuentra en la lista de favoritos
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favorites.includes(id));
  }, [id]);

  //regresa la card particular
  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2 style ={{color: theme.font}}>{name}</h2>
        <p style ={{color: theme.font}}>username: {username}</p>
        <p style ={{color: theme.font}}>id: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton" style ={{color: theme.font}}>{isFav ? "Remove fav" : "Add fav"}</button> 
    </div>
  );
};



export default Card;
