import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function useUserContext () {
  
  const context = useContext(UserContext); 
  
  if (!context) {
    throw new Error('Tienes que usar este hook dentro del contexto correcto.');
  }

  return context;
}

export default useUserContext;