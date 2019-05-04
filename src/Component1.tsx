import * as React from "react";
import { AppState } from "./redux/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Action1 } from "./redux/chunk1";

type StateProps = {
  someString1: string;
  someFlag1: boolean;
};

type DispatchProps = {
  changeSomeString1: (newValue: string) => void;
  toggleSomeFlag1: () => void;
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
  </div>
);

const mapStateToProps = (state: AppState): StateProps => ({
  someString1: state.chunk1.someString1,
  someFlag1: state.chunk1.someFlag1
});

const mapDispatchToProps = (dispatch: Dispatch<Action1>): DispatchProps => ({
  changeSomeString1: (newValue: string) =>
    dispatch({ type: "CHUNK1/SET_SOME_STRING1", payload: newValue }),
  toggleSomeFlag1: () => dispatch({ type: "CHUNK1/TOGGLE_SOME_FLAG1" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1);
