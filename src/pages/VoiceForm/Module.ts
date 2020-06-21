import { Action } from "redux";

export enum ActionNames {
  SET = "voiceform/set",
}

export interface VoiceFormState {}

export const initialState: VoiceFormState = {};

interface SetAction extends Action {
  type: ActionNames.SET;
}

export const set = (): SetAction => ({
  type: ActionNames.SET,
});

export type VoiceFormActions = SetAction;

export default function reducer(
  state: VoiceFormState = initialState,
  action: VoiceFormActions
): VoiceFormState {
  switch (action.type) {
    default:
      return state;
  }
}
