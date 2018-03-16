import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePropertyName, updateDescription } from "../../../ducks/reducer";

class StepOne extends Component {
  render() {
    return (
      <div>
        <div>Property Name</div>
        <input
          onChange={e => this.props.updatePropertyName(e.target.value)}
          type="text"
        />
        <div>Property Description</div>
        <textarea
          onChange={e => this.props.updateDescription(e.target.value)}
          cols="30"
          rows="10"
        />
        <div>
          <Link to="/wizard/2">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, {
  updatePropertyName,
  updateDescription
})(StepOne);
