import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      }catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <>
    <h1>Detail Dentist id </h1>
    {user ? (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </>
  )
}

export default Detail