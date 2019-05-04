import { Dispatch } from "redux";
import { AppState } from "./store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type State1 = {
  someString1: string;
  someFlag1: boolean;
};

const initialState1: State1 = {
  someString1: "someString1",
  someFlag1: true
};

export type Action1 =
  | { type: "CHUNK1/SET_SOME_STRING1"; payload: string }
  | { type: "CHUNK1/TOGGLE_SOME_FLAG1" };

export const reducer1 = (
  state: State1 = initialState1,
  action: Action1
): State1 => {
  switch (action.type) {
    case "CHUNK1/SET_SOME_STRING1":
      return { ...state, someString1: action.payload };
    case "CHUNK1/TOGGLE_SOME_FLAG1":
      return { ...state, someFlag1: !state.someFlag1 };
    default:
      return state;
  }
};

export const thunkActionCreator1 = (
  thunkParam: string
): ThunkAction<void, AppState, void, Action1> => (
  dispatch: Dispatch<Action1>, // ThunkDispatch<AppState, void, Action1>
  getState: () => AppState
) => {
  const state: AppState = getState();
  if (state.chunk1.someFlag1) {
    dispatch({ type: "CHUNK1/SET_SOME_STRING1", payload: thunkParam });
  }
};
