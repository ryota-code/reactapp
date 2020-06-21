import { Switch } from "react-router";
import { Route } from "react-router-dom";
import * as React from "react";
import App from "./App/Container";
import Table from "./pages/table/Container";
import VoiceForm from "./pages/VoiceForm/Container";
import RequestForm from "./pages/RequestForm/Container";
import Help from "./pages/Help/Container";
import Detail from "./pages/Detail/Container";
import GenreWomen from "./pages/GenreWomen/Container";
import GenreMen from "./pages/GenreMen/Container";
import GenreCouple from "./pages/GenreCouple/Container";

export const Routes: React.FC<any> = () => {
  return (
    <>
      <App />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/voiceform" component={VoiceForm} />
        <Route exact path="/requestform" component={RequestForm} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/genrewomen" component={GenreWomen} />
        <Route exact path="/genremen" component={GenreMen} />
        <Route exact path="/genrecouple" component={GenreCouple} />
      </Switch>
    </>
  );
};
