import { connect } from "react-redux";
import { ReduxState, ReduxAction } from "../../Store";
import { Dispatch } from "react";
import { VoiceForm } from "./VoiceForm";
import { push } from "connected-react-router";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public transitToTable() {
    this.dispatch(push("/table"));
  }

  public transitToVoiceForm() {
    this.dispatch(push("/voiceform"));
  }

  public transitToRequestForm() {
    this.dispatch(push("/requestform"));
  }

  public transitToHelp() {
    this.dispatch(push("/help"));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.voiceform }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(VoiceForm);
