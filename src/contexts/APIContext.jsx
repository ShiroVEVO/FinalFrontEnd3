import React, {createContext, useState, useEffect} from 'react';

export const APIContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <APIContext.Provider value={{ users, isLoading, error }}>
      {children}
    </APIContext.Provider>
  );
};

export default UserContextProvider;

