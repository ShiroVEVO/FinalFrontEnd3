//Importes necesarios de react
import React, {useContext} from 'react'
import {useParams} from "react-router-dom";

//Importes necesarios de contextos
import {APIContext} from '../contexts/APIContext';

const Detail = () => {
  //Seteo de contexto, parametros y usuario particular
  const { id } = useParams();
  const { users, isLoading, error } = useContext(APIContext);
  const user = users.find(user => user.id === Number(id));

  if (isLoading) { //Fixeo del renderizado previo conexión con el contexto
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error.message}</p>;
  } else if (!user) {
    return <p>User not found</p>;
  }

  // Regresa el dentista particular
  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </>
  );
}

export default Detail