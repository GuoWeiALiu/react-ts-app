import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

export interface IAction {
  type: string
  payload?: {}
}

export const rootEpic = combineEpics(
);

export interface IApplicationState {
}

export const rootReducer = combineReducers<IApplicationState>({});
