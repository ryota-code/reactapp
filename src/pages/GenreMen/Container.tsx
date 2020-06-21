import { connect } from "react-redux";
import { ReduxState, ReduxAction } from "../../Store";
import { Dispatch } from "react";
import { GenreMen } from "./GenreMen";
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

  public transitToDetail() {
    this.dispatch(push("/detail"));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.genremen }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch),
  })
)(GenreMen);
