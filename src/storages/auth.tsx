import {
  createContext,
  FC,
  useContext,
  ReactNode,
  useReducer,
} from 'react';
import AuthReducer, { AuthContextProps } from './reducers';

interface AuthProviderProps {
  children: ReactNode;
}

const initialData = {
  name: '',
  isAuthenticated: false,
};

const AuthContext = createContext(initialData);
const AuthDispatchContext = createContext(null);

const AuthProvider: FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useReducer(AuthReducer, initialData);

  return (
    <AuthDispatchContext.Provider value={setUser}>
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

const useAuth = (): AuthContextProps => useContext(AuthContext);

const useDispatchAuth = (): void => useContext(AuthDispatchContext);

export { AuthProvider, useAuth, useDispatchAuth };
