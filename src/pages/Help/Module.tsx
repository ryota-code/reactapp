import { Action } from "redux";

export enum ActionNames {
  SET = "help/set",
  SET_INCRIMENT_COUNT = "help/set_incriment_count"
}

export interface HelpState {
  count: number;
}

export const initialState: HelpState = {
  count: 0
};

interface SetAction extends Action {
  type: ActionNames.SET;
}

interface SetIncrimentCountAction extends Action {
  type: ActionNames.SET_INCRIMENT_COUNT;
  count: number;
}

export const setIncrimentCountAction = (): SetIncrimentCountAction => ({
  type: ActionNames.SET_INCRIMENT_COUNT,
  count: 1
});

export const set = (): SetAction => ({
  type: ActionNames.SET
});

export type HelpActions = SetAction | SetIncrimentCountAction;

export default function reducer(
  state: HelpState = initialState,
  action: HelpActions
): HelpState {
  switch (action.type) {
    case ActionNames.SET_INCRIMENT_COUNT:
      return { ...state, count: state.count + action.count };
    default:
      return state;
  }
}
