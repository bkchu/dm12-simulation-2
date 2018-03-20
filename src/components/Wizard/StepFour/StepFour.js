import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateLoan, updateMortgage } from "../../../ducks/reducer";
import "./Four.css";

class StepFour extends Component {
  render() {
    return (
      <div className="Four">
        <div className="label">Loan Amount</div>
        <input
          className="Four__input"
          onChange={e => this.props.updateLoan(e.target.value)}
          type="text"
        />

        <div className="label">Monthly Mortgage</div>
        <input
          className="Four__input"
          onChange={e => this.props.updateMortgage(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/3">
            <button className="Wizard__button Wizard__button--next">
              Previous Step
            </button>
          </Link>
          <Link to="/wizard/5">
            <button className="Wizard__button Wizard__button--next">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { updateLoan, updateMortgage })(
  StepFour
);
