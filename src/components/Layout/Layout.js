import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoggedOut } from "../../ducks/reducer";
import { Link } from "react-router-dom";

import "./Layout.css";
import Logo from "../../assets/header_logo.png";

class Layout extends Component {
  render() {
    return (
      <div className="Layout__container">
        <div className="Layout__header">
          <div className="Layout__child">
            <div className="Layout__brand">
              <img src={Logo} alt="houser logo" />
              <span className="Layout__title bold">Houser </span>{" "}
              <span className="Layout__title Layout__title--dashboard">
                {" "}
                Dashboard
              </span>
            </div>
            <Link to="/">
              <button
                onClick={() => this.props.userLoggedOut(this.props.history)}
                className="Layout__button bold"
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
