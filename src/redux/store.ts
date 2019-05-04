import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer1, State1 } from "./chunk1";
import { reducer2, State2 } from "./chunk2";

export type AppState = {
  chunk1: State1;
  chunk2: State2;
};

const mainReducer = combineReducers({
  chunk1: reducer1,
  chunk2: reducer2
});

export const configureStore = (extraArg: string) =>
  createStore(
    mainReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware.withExtraArgument(extraArg))
    )
  );
