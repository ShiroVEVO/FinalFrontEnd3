import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { APIContext } from '../contexts/APIContext';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { users, isLoading, error } = useContext(APIContext);
  const user = users.find(user => user.id === Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

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