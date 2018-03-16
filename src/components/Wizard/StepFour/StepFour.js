import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateLoan, updateMortgage } from "../../../ducks/reducer";

class StepFour extends Component {
  render() {
    return (
      <div>
        <div>Loan Amount</div>
        <input
          onChange={e => this.props.updateLoan(e.target.value)}
          type="text"
        />

        <div>Monthly Mortgage</div>
        <input
          onChange={e => this.props.updateMortgage(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/3">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/5">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { updateLoan, updateMortgage })(
  StepFour
);
