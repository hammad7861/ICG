import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/auth';

function ProtectedRoute({ children }) {
  const isAuth = useAuthStore((state) => state.token !== null);
  const isLoading = useAuthStore((state) => state.isLoading);
  if (isLoading) {
    return '...Loading';
  }
  if (!isAuth) {
    return (
      <Navigate
        to={'/auth'}
        replace
      />
    );
  }
  return <>{children}</>
}

export default ProtectedRoute;
