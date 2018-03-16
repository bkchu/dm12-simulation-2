import React, { Component } from "react";
import "./Layout.css";
import { connect } from "react-redux";
import { userLoggedOut } from "../../ducks/reducer";
import { Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div className="Layout__container">
        <div className="Layout__header">
          <div className="Layout__child">
            <p>Logo Here Houser Dashboard</p>
            <Link to="/">
              <button
                onClick={() => this.props.userLoggedOut(this.props.history)}
                className="Layout__button"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="Layout__body">{this.props.children}</div>
      </div>
    );
  }
}

export default connect(state => state, { userLoggedOut })(Layout);
