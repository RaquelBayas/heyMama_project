import { Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PrivateRoute({ children }) {
    const { user } = useUserContext();
    console.log(user);


    const isExpired = user?.exp < Date.now();

    if (!user || isExpired) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;
