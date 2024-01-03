import { Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
    Professional?: boolean;
}
function PrivateRoute({ children, Professional = false }: PrivateRouteProps) {
    const { user } = useUserContext();
    console.log(user);

    const isExpired = user!.exp < Date.now();

    if (Professional && user!.userType === 'admin') return <Navigate to="/" />;

    if (!user || isExpired) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;
