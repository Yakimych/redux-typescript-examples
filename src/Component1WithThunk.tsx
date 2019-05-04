import * as React from "react";
import { AppState } from "./redux/store";
import { connect } from "react-redux";
import { Action1, thunkActionCreator1 } from "./redux/chunk1";
import { ThunkDispatch } from "redux-thunk";

type StateProps = {
  someString1: string;
  someFlag1: boolean;
};

type DispatchProps = {
  changeSomeString1: (newValue: string) => void;
  toggleSomeFlag1: () => void;
  thunkProp: (thunkParam: string) => void;
};

type Props = StateProps & DispatchProps;

const Component1: React.FC<Props> = props => (
  <div className="component1">
    <input
      type="text"
      value={props.someString1}
      onChange={e => props.changeSomeString1(e.target.value)}
    />
    <input
      type="checkbox"
      checked={props.someFlag1}
      onChange={props.toggleSomeFlag1}
    />
    <button onClick={() => props.thunkProp("abc")}>Thunk</button>
  </div>
);

const mapStateToProps = (state: AppState): StateProps => ({
  someString1: state.chunk1.someString1,
  someFlag1: state.chunk1.someFlag1
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, Action1>
): DispatchProps => ({
  changeSomeString1: (newValue: string) =>
    dispatch({ type: "CHUNK1/SET_SOME_STRING1", payload: newValue }),
  toggleSomeFlag1: () => dispatch({ type: "CHUNK1/TOGGLE_SOME_FLAG1" }),
  thunkProp: (thunkParam: string) => dispatch(thunkActionCreator1(thunkParam))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1);
