import React, { useContext } from 'react';
import { APIContext } from '../contexts/APIContext';
import Card from '../Components/Card'

const Home = () => {
  const {users} = useContext(APIContext);

  console.log(users);

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
}


export default Home;