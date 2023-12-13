import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function useUserContext () {
  return useContext(UserContext);  
}

export default useUserContext;