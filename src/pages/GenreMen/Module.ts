import { Action } from "redux";

export enum ActionNames {
  SET = "genreMen/set",
}

export interface GenreMenState {}

export const initialState: GenreMenState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type GenreMenActions = SetAction;

export default function reducer(
  state: GenreMenState = initialState,
  action: GenreMenActions
): GenreMenState {
  switch (action.type) {
    default:
      return state;
  }
}
