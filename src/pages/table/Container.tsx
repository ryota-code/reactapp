import { connect } from "react-redux";
import { ReduxState, ReduxAction } from "../../Store";
import { Dispatch } from "react";
import { Table } from "./Table";
import { push } from "connected-react-router";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
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

  public transitToDetail() {
    this.dispatch(push("/detail"));
  }

  public transitToGenreWomen() {
    this.dispatch(push("/genrewomen"));
  }

  public transitToGenreMen() {
    this.dispatch(push("/genremen"));
  }

  public transitToGenreCouple() {
    this.dispatch(push("/genrecouple"));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.table }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Table);
