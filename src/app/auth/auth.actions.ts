import {Action} from '@ngrx/store';

export  enum EAuthActions {
  SET_AUTHENTICATED = '[Auth] Set Authenticated',
  SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated'
}

export class SetAuthenticated implements Action {
  readonly type = EAuthActions.SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
  readonly type = EAuthActions.SET_UNAUTHENTICATED;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated;
