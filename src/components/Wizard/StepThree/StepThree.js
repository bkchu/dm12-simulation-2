import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePictureUrl } from "../../../ducks/reducer";
import "./Three.css";

class StepThree extends Component {
  render() {
    return (
      <div className="Three">
        <div className="Three__img">
          <img src={this.props.picture_url} alt="Preview" />
        </div>
        <div className="label">Image URL</div>
        <input
          className="Three__input"
          onChange={e => this.props.updatePictureUrl(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/2">
            <button className="Wizard__button Wizard__button--next">
              Previous Step
            </button>
          </Link>
          <Link to="/wizard/4">
            <button className="Wizard__button Wizard__button--next">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { updatePictureUrl })(StepThree);
