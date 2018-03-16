import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePictureUrl } from "../../../ducks/reducer";

class StepThree extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.picture_url} alt="Preview" />
        </div>
        <div>Image URL</div>
        <input
          onChange={e => this.props.updatePictureUrl(e.target.value)}
          type="text"
        />
        <div>
          <Link to="/wizard/2">
            <button>Previous Step</button>
          </Link>
          <Link to="/wizard/4">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { updatePictureUrl })(StepThree);
