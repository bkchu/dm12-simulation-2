import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePropertyName, updateDescription } from "../../../ducks/reducer";
import "./One.css";

class StepOne extends Component {
  render() {
    return (
      <div className="One">
        <div className="label">Property Name</div>
        <input
          className="One__input"
          onChange={e => this.props.updatePropertyName(e.target.value)}
          type="text"
        />
        <div className="label">Property Description</div>
        <textarea
          className="One__input"
          onChange={e => this.props.updateDescription(e.target.value)}
          cols="30"
          rows="10"
        />
        <div>
          <Link to="/wizard/2">
            <button className="Wizard__button Wizard__button--next">
              Next Step
            </button>
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
