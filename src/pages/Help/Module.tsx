import { Action } from "redux";

export enum ActionNames {
  SET_INCRIMENT_COUNT = "help/set_incriment_count"
}

export interface HelpState {
  count: number;
}

export const initialState: HelpState = {
  count: 0
};

interface SetIncrimentCountAction extends Action {
  type: ActionNames.SET_INCRIMENT_COUNT;
}

export const setIncrimentCountAction = (): SetIncrimentCountAction => ({
  type: ActionNames.SET_INCRIMENT_COUNT,
});

export type HelpActions = SetIncrimentCountAction;

export default function reducer(
  state: HelpState = initialState,
  action: HelpActions
): HelpState {
  switch (action.type) {
    case ActionNames.SET_INCRIMENT_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
