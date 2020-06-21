import React from "react";
import { ActionDispatcher } from "./Container";

interface Props {
  actions: ActionDispatcher;
}

export const App: React.FC<Props> = props => {
  React.useEffect(() => {
    props.actions.init();
  }, []);

  return <></>;
};
