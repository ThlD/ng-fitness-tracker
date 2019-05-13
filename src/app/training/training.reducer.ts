import {TrainingActions, ETrainingActions} from './training.actions';
import {Exercise} from './exercise.model';
import * as fromRoot from '../app.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ITrainingState {
  availableExercises: Exercise[];
  finishedExercises: Exercise[];
  activeTraining: Exercise;
}

export interface IState extends fromRoot.IAppState {
  training: ITrainingState;
}

const initialState: ITrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTraining: null
};

export function trainingReducer(state = initialState, action: TrainingActions): ITrainingState {
  switch (action.type) {
    case ETrainingActions.SET_AVAILABLE_TRAININGS:
      return {
        ...state,
        availableExercises: action.payload
      };
    case ETrainingActions.SET_FINISHED_TRAININGS:
      return {
        ...state,
        finishedExercises: action.payload
      };
    case ETrainingActions.START_ACTIVE_TRAINING:
      return {
        ...state,
        activeTraining: {...state.availableExercises.find(ex => ex.id === action.payload)}
      };
    case ETrainingActions.STOP_ACTIVE_TRAINING:
      return {
        ...state,
        activeTraining: null
      };
    default:
      return state;
  }
}

export const selectTrainingState = createFeatureSelector<ITrainingState>('training');

export const selectAvailableExercises = createSelector(selectTrainingState, (state: ITrainingState) => state.availableExercises);
export const selectFinishedExercises = createSelector(selectTrainingState, (state: ITrainingState) => state.finishedExercises);
export const selectActiveTraining = createSelector(selectTrainingState, (state: ITrainingState) => state.activeTraining);
export const selectIsTraining = createSelector(selectTrainingState, (state: ITrainingState) => state.activeTraining != null);
