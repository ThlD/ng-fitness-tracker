import {Action} from '@ngrx/store';

export  enum EUIActions {
  START_LOADING = '[UI] Start Loading',
  STOP_LOADING = '[UI] Stop Loading'
}

export class StartLoading implements Action {
  readonly type = EUIActions.START_LOADING;
}

export class StopLoading implements Action {
  readonly type = EUIActions.STOP_LOADING;
}

export type UIActions = StartLoading | StopLoading;
