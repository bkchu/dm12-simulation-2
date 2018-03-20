import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../../ducks/reducer";
import "./Two.css";

class StepTwo extends Component {
  render() {
    return (
      <div className="Two">
        <div className="label">Address</div>
        <input
          className="Two__input"
          onChange={e => this.props.updateAddress(e.target.value)}
          type="text"
        />

        <div className="label">City</div>
        <input
          className="Two__input"
          onChange={e => this.props.updateCity(e.target.value)}
          type="text"
        />

        <div className="label">State</div>
        <input
          className="Two__input"
          onChange={e => this.props.updateState(e.target.value)}
          type="text"
        />

        <div className="label">Zip</div>
        <input
          className="Two__input"
          onChange={e => this.props.updateZip(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/1">
            <button className="Wizard__button Wizard__button--next">
              Previous Step
            </button>
          </Link>
          <Link to="/wizard/3">
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
  updateAddress,
  updateCity,
  updateState,
  updateZip
})(StepTwo);
