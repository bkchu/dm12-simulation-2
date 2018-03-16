import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../../ducks/reducer";

class StepTwo extends Component {
  render() {
    return (
      <div>
        <div>Address</div>
        <input
          onChange={e => this.props.updateAddress(e.target.value)}
          type="text"
        />

        <div>City</div>
        <input
          onChange={e => this.props.updateCity(e.target.value)}
          type="text"
        />

        <div>State</div>
        <input
          onChange={e => this.props.updateState(e.target.value)}
          type="text"
        />

        <div>Zip</div>
        <input
          onChange={e => this.props.updateZip(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/1">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, {
  updateAddress,
  updateCity,
  updateState,
  updateZip
})(StepTwo);
