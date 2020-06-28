import { createStore, combineReducers, Action, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createHashHistory } from "history";
import app, { AppActions, AppState } from "./App/Module";
import table, { TableActions, TableState } from "./pages/table/Module";
import voiceform, {
  VoiceFormActions,
  VoiceFormState
} from "./pages/VoiceForm/Module";
import requestform, {
  RequestFormActions,
  RequestFormState
} from "./pages/RequestForm/Module";
import help, { HelpActions, HelpState } from "./pages/Help/Module";
import detail, { DetailActions, DetailState } from "./pages/detail/Module";
import genrewomen, {
  GenreWomenActions,
  GenreWomenState
} from "./pages/GenreWomen/Module";
import genremen, {
  GenreMenActions,
  GenreMenState
} from "./pages/GenreMen/Module";
import genrecouple, {
  GenreCoupleActions,
  GenreCoupleState
} from "./pages/GenreCouple/Module";

export const history = createHashHistory();

const createRootReducer = () =>
  createStore(
    combineReducers({
      router: connectRouter(history),
      app,
      table,
      voiceform,
      requestform,
      help,
      detail,
      genrewomen,
      genremen,
      genrecouple
    }),
    applyMiddleware(routerMiddleware(history))
  );

export default createRootReducer;

export type ReduxState = {
  app: AppState;
  table: TableState;
  voiceform: VoiceFormState;
  requestform: RequestFormState;
  help: HelpState;
  detail: DetailState;
  genrewomen: GenreWomenState;
  genremen: GenreMenState;
  genrecouple: GenreCoupleState;
};

export type ReduxAction =
  | AppActions
  | TableActions
  | VoiceFormActions
  | RequestFormActions
  | HelpActions
  | DetailActions
  | GenreWomenActions
  | GenreMenActions
  | GenreCoupleActions
  | Action;
