import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { cancelAdd } from "../../ducks/reducer";

import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import StepFour from "./StepFour/StepFour";
import StepFive from "./StepFive/StepFive";

class Wizard extends Component {
  render() {
    return (
      <Layout>
        <div className="Wizard__container">
          <div className="Wizard__header">
            <p>Add new listing</p>
            <button onClick={() => this.props.cancelAdd(this.props.history)}>
              Cancel
            </button>
            <div>Step {this.props.match.params.id}</div>
          </div>
        </div>
        <Switch>
          <Route path="/wizard/1" component={StepOne} />
          <Route path="/wizard/2" component={StepTwo} />
          <Route path="/wizard/3" component={StepThree} />
          <Route path="/wizard/4" component={StepFour} />
          <Route path="/wizard/5" component={StepFive} />
        </Switch>
      </Layout>
    );
  }
}

export default connect(state => state, { cancelAdd })(Wizard);
