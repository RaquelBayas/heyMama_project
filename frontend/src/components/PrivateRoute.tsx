import { Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PrivateRoute({ children, Professional = false }) {
    const { user } = useUserContext();
    console.log(user);

    const isExpired = user?.exp < Date.now();

    if (Professional && user.type === 1) return <Navigate to="/" />;

    if (!user || isExpired) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;
