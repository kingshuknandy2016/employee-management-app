import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

//If user is not logged in then navigate to login page
const PrivateRoute = ({ children }: any) => {
  const isUserLoggedIn = useAuth();

  return isUserLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
