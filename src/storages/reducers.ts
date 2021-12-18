import Authentication from '../enums/auth';

interface Action {
  type: string;
  payload: Record<string, unknown>;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  name: string;
}

const AuthReducer = (state: AuthContextProps, action: Action): AuthContextProps => {
  switch (action.type) {
    case Authentication.LOGIN:
      return {
        isAuthenticated: true,
        name: action.payload.name
      } as AuthContextProps;
    case Authentication.LOGOUT:
      return {
        name: '',
        isAuthenticated: false,
      } as AuthContextProps;
    default:
      return state;
  }
};

export default AuthReducer;
