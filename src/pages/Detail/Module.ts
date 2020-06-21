import { Action } from "redux";

export enum ActionNames {
  SET = "detail/set",
}

export interface DetailState {}

export const initialState: DetailState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type DetailActions = SetAction;

export default function reducer(
  state: DetailState = initialState,
  action: DetailActions
): DetailState {
  switch (action.type) {
    default:
      return state;
  }
}
