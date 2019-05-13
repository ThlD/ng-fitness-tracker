import {EUIActions, UIActions} from '../actions/ui.actions';

export interface IUIState {
  isLoading: boolean;
}

const initialState: IUIState = {
  isLoading: false
};

export function uiReducer(state = initialState, action: UIActions): IUIState {
  switch (action.type) {
    case EUIActions.START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case EUIActions.STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export const selectIsLoading = (state: IUIState) => state.isLoading;


