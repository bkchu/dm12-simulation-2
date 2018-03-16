import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoggedIn, userRegistered } from "../../ducks/reducer";

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
    console.log(this.state);
    return (
      <div className="Home__container">
        <p>This is the Home Component</p>
        <div>
          <div>Username</div>
          <input
            onChange={e => this.setState({ user: e.target.value })}
            type="email"
            required
          />
          <div>Password</div>
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            required
          />
        </div>
        <div>
          <button onClick={this.onLoginHandler}>Login</button>
          <button onClick={this.onRegisterHandler}>Register</button>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { userLoggedIn, userRegistered })(Home);
