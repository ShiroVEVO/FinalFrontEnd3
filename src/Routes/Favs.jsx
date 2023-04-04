//Importes de react
import React, { useContext } from 'react';

//Importes de contexto
import { APIContext } from '../contexts/APIContext';

//Importes de componentes
import Card from "../Components/Card";

const Favs = () => {
  // Obtener la lista de favoritos actual de la localstore y los usuarios totales del contexto
  const favorites = JSON.parse(localStorage.getItem("favorites")) || []; 
  const {users} = useContext(APIContext);

  //Filtra los usuarios recibidos del contexto acorde a los favoritos de la LocalStore
  const filteredUsers = users.filter((user) => favorites.includes(user.id));
  
  //Regresa la card particular de cada favorito
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {filteredUsers.map((user) => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
