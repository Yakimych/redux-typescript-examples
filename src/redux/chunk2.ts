export type State2 = {
  someNumber2: number;
  someFlag2: boolean;
};

const initialState2: State2 = {
  someNumber2: 10,
  someFlag2: false
};

export type Action2 =
  | { type: "CHUNK2/SET_SOME_NUMBER2"; payload: string }
  | { type: "CHUNK2/TOGGLE_SOME_FLAG2" };

export const reducer2 = (
  state: State2 = initialState2,
  action: Action2
): State2 => {
  switch (action.type) {
    case "CHUNK2/SET_SOME_NUMBER2":
      return { ...state, someNumber2: Number(action.payload) || 0 };
    case "CHUNK2/TOGGLE_SOME_FLAG2":
      return { ...state, someFlag2: !state.someFlag2 };
    default:
      return state;
  }
};
