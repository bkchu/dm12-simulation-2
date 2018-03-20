import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateDesiredRent, addProperty } from "../../../ducks/reducer";
import "./Five.css";

class StepFive extends Component {
  onCompleteHandler = () => {
    this.props.addProperty(this.props.state, this.props.history);
  };

  render() {
    return (
      <div className="Five">
        <p className="label Five__recommended-rent">
          Recommended Rent ${this.props.state.mortgage * 1.25}
        </p>
        <div className="label">Desired Rent</div>
        <input
          className="Five__input"
          onChange={e => this.props.updateDesiredRent(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/4">
            <button className="Wizard__button Wizard__button--next">
              Previous Step
            </button>
          </Link>

          <button
            className="Wizard__button Wizard__button--complete"
            onClick={this.onCompleteHandler}
          >
            Complete
          </button>
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
