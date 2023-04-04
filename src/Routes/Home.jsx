//Importes de react
import React, { useContext } from 'react';

//Importes de contexto
import { APIContext } from '../contexts/APIContext';

//Importes de componentes
import Card from '../Components/Card'

const Home = () => {
  //Trae los usuarios del contexto
  const {users} = useContext(APIContext);

  //Regresa una card por cada usuario recibido del contexto
  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} />
        ))}
      </div>
    </main>
  );
};


export default Home;