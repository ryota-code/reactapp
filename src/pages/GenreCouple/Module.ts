import { Action } from "redux";

export enum ActionNames {
  SET = "genreCouple/set",
}

export interface GenreCoupleState {}

export const initialState: GenreCoupleState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type GenreCoupleActions = SetAction;

export default function reducer(
  state: GenreCoupleState = initialState,
  action: GenreCoupleActions
): GenreCoupleState {
  switch (action.type) {
    default:
      return state;
  }
}
