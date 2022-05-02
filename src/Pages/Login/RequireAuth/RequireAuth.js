import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (user) {
    return children;
  }
};

export default RequireAuth;
