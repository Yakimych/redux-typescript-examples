import * as React from "react";
import { AppState } from "./redux/store";
import { Dispatch } from "redux";
import { Action2 } from "./redux/chunk2";
import { connect } from "react-redux";

type StateProps = {
  someNumber2: number;
  someFlag2: boolean;
};

type DispatchProps = {
  changeSomeNumber2: (newValue: string) => void;
  toggleSomeFlag2: () => void;
};

type Props = StateProps & DispatchProps;

const Component2: React.FC<Props> = props => (
  <div className="component2">
    <input
      type="text"
      value={props.someNumber2}
      onChange={e => props.changeSomeNumber2(e.target.value)}
    />
    <input
      type="checkbox"
      checked={props.someFlag2}
      onChange={props.toggleSomeFlag2}
    />
  </div>
);

const mapStateToProps = (state: AppState): StateProps => ({
  someNumber2: state.chunk2.someNumber2,
  someFlag2: state.chunk2.someFlag2
});

const mapDispatchToProps = (dispatch: Dispatch<Action2>): DispatchProps => ({
  changeSomeNumber2: (newValue: string) =>
    dispatch({ type: "CHUNK2/SET_SOME_NUMBER2", payload: newValue }),
  toggleSomeFlag2: () => dispatch({ type: "CHUNK2/TOGGLE_SOME_FLAG2" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component2);
