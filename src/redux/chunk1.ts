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
