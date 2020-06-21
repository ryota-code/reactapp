import { Action } from "redux";

export enum ActionNames {
  SET = "requestForm/set",
}

export interface RequestFormState {}

export const initialState: RequestFormState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type RequestFormActions = SetAction;

export default function reducer(
  state: RequestFormState = initialState,
  action: RequestFormActions
): RequestFormState {
  switch (action.type) {
    default:
      return state;
  }
}
