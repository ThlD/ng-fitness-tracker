import {AuthActions, EAuthActions} from './auth.actions';

export interface IAuthState {
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions): IAuthState {
  switch (action.type) {
    case EAuthActions.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    case EAuthActions.SET_UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export const selectIsAuthenticated = (state: IAuthState) => state.isAuthenticated;


