import { connect } from "react-redux";
import { ReduxState, ReduxAction } from "../../Store";
import { Dispatch } from "react";
import { Detail } from "./Detail";
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
}

export default connect(
  (state: ReduxState) => ({ value: state.detail }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch),
  })
)(Detail);
