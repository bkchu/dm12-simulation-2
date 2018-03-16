import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateDesiredRent, addProperty } from "../../../ducks/reducer";
class StepFive extends Component {
  onCompleteHandler = () => {
    console.log("current state: ", this.props);
    this.props.addProperty(this.props.state, this.props.history);
  };

  render() {
    return (
      <div>
        <p>Recommended Rent ${this.props.state.mortgage * 1.25}</p>
        <div>Desired Rent</div>
        <input
          onChange={e => this.props.updateDesiredRent(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/4">
            <button>Previous Step</button>
          </Link>

          <button onClick={this.onCompleteHandler}>Complete</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return { state };
  },
  { updateDesiredRent, addProperty }
)(StepFive);
