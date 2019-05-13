import {Action} from '@ngrx/store';
import {Exercise} from './exercise.model';

export  enum ETrainingActions {
  SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings',
  SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings',
  START_ACTIVE_TRAINING = '[Training] Start Active Training',
  STOP_ACTIVE_TRAINING = '[Training] Stop Active Training'
}

export class SetAvailableTrainings implements Action {
  readonly type = ETrainingActions.SET_AVAILABLE_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = ETrainingActions.SET_FINISHED_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class StartActiveTraining implements Action {
  readonly type = ETrainingActions.START_ACTIVE_TRAINING;
  constructor(public payload: string) {}
}

export class StopActiveTraining implements Action {
  readonly type = ETrainingActions.STOP_ACTIVE_TRAINING;
}

export type TrainingActions =
  SetAvailableTrainings
  | SetFinishedTrainings
  | StartActiveTraining
  | StopActiveTraining;
