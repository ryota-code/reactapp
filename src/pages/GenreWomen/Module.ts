import { Action } from "redux";

export enum ActionNames {
  SET = "genreWomen/set",
}

export interface GenreWomenState {}

export const initialState: GenreWomenState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type GenreWomenActions = SetAction;

export default function reducer(
  state: GenreWomenState = initialState,
  action: GenreWomenActions
): GenreWomenState {
  switch (action.type) {
    default:
      return state;
  }
}
