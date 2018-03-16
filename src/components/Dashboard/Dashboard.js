import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import { getProperties, filterProperties } from "../../ducks/reducer.js";
class Dashboard extends Component {
  state = {
    filter: 0
  };
  componentDidMount() {
    let properties = this.props.getProperties();
  }

  addNewPropertyHandler = () => {
    this.props.history.push("/wizard/1");
  };

  onFilterChangeHandler = e => {
    this.setState({ filter: +e.target.value });
  };

  render() {
    let { properties } = this.props;
    let homeDisplay = <p />;
    if (properties && properties.length > 0) {
      homeDisplay = properties.map((property, index) => {
        return (
          <div key={index}>
            <p>property_name: {property.property_name}</p>
            <p>description: {property.description}</p>
            <p>loan: {property.loan}</p>
            <p>mortgage: {property.mortgage}</p>
            <p>recommended_rent: {property.recommended_rent}</p>
            <p>desired_rent: {property.desired_rent}</p>
            <p>address: {property.address}</p>
            <p>city: {property.city}</p>
            <p>state: {property.state}</p>
            <p>zip: {property.zip}</p>
            <img src={property.picture_url} alt="" />
          </div>
        );
      });
    }
    return (
      <Layout>
        <div>
          <button onClick={this.addNewPropertyHandler}>Add new property</button>
          <div>
            <span>List properties with "desired rent" greater than: $</span>
            <input onChange={this.onFilterChangeHandler} type="text" />
            <button
              onClick={() => this.props.filterProperties(this.state.filter)}
            >
              Filter
            </button>
            <button onClick={() => this.props.getProperties()}>Reset</button>
          </div>
          <div>
            <p>Home Listings</p>
            {homeDisplay}
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(state => state, { getProperties, filterProperties })(
  Dashboard
);
