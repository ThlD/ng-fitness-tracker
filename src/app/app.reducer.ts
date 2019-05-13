import * as fromUI from './shared/reducers/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';



export interface IAppState {
  ui: fromUI.IUIState;
  auth: fromAuth.IAuthState;
}

export const AppRedusers: ActionReducerMap<IAppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer
};

export const selectUIState = createFeatureSelector<fromUI.IUIState>('ui');
export const selectIsLoading = createSelector(selectUIState, fromUI.selectIsLoading);

export const selectAuthState = createFeatureSelector<fromAuth.IAuthState>('auth');
export const selectIsAuthenticated = createSelector(selectAuthState, fromAuth.selectIsAuthenticated);
