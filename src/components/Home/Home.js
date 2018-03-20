import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoggedIn, userRegistered } from "../../ducks/reducer";

import "./Home.css";
import Logo from "../../assets/auth_logo.png";

class Home extends Component {
  state = {
    user: "",
    password: ""
  };

  onLoginHandler = () => {
    this.props.userLoggedIn(
      this.state.user,
      this.state.password,
      this.props.history
    );
  };

  onRegisterHandler = () => {
    this.props.userRegistered(
      this.state.user,
      this.state.password,
      this.props.history
    );
  };

  render() {
    return (
      <div className="Home__container">
        <img src={Logo} alt="houser logo" />
        <div className="Home__form">
          <div className="label">Username</div>
          <input
            className="Home__input"
            onChange={e => this.setState({ user: e.target.value })}
            type="email"
            required
          />
          <div className="label">Password</div>
          <input
            className="Home__input"
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            required
          />
        </div>
        <div>
          <button
            className="Home__button Home__button--login bold"
            onClick={this.onLoginHandler}
          >
            Login
          </button>
          <button
            className="Home__button Home__button--register bold"
            onClick={this.onRegisterHandler}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { userLoggedIn, userRegistered })(Home);
