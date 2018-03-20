import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import {
  getProperties,
  filterProperties,
  deleteProperty
} from "../../ducks/reducer.js";

import "./Dashboard.css";
import "./property.css";
class Dashboard extends Component {
  state = {
    filter: 0
  };

  componentDidMount() {
    if (!this.props.loading) this.props.getProperties();
  }

  addNewPropertyHandler = () => {
    this.props.history.push("/wizard/1");
  };

  onFilterChangeHandler = e => {
    this.setState({ filter: +e.target.value });
  };

  render() {
    let { properties, loading } = this.props;
    let homeDisplay = <p />;
    if (!loading) {
      console.log("properties: ", properties);
      homeDisplay = properties.map((property, index) => {
        return (
          <div className="property" key={index}>
            <div className="property__left">
              <img
                className="property__image"
                src={property.picture_url}
                alt=""
              />
              <div className="property__title">
                <p className="property__name">{property.property_name}</p>
                <p className="property__description">{property.description}</p>
              </div>
            </div>
            <div className="property__right">
              <p className="property__property">Loan: ${property.loan}</p>
              <p className="property__property">
                Monthly Mortgage: ${property.mortgage}
              </p>
              <p className="property__property">
                Recommended Rent: ${property.recommended_rent}
              </p>
              <p className="property__property">
                Desired Rent: ${property.desired_rent}
              </p>
              <p className="property__property">Address: {property.address}</p>
              <p className="property__property">City: {property.city}</p>
              <p className="property__property">State: {property.state}</p>
              <p className="property__property">Zip: {property.zip}</p>
            </div>
            <button onClick={() => this.props.deleteProperty(property.id)}>
              x
            </button>
          </div>
        );
      });
    }
    return (
      <Layout>
        <div className="Dashboard">
          <button
            className="Dashboard__button Dashboard__button--add"
            onClick={this.addNewPropertyHandler}
          >
            Add new property
          </button>
          <div>
            <span className="Dashboard__text">
              List properties with "desired rent" greater than: $
            </span>
            <input
              className="Dashboard__input"
              onChange={this.onFilterChangeHandler}
              type="text"
            />
            <button
              className="Dashboard__button Dashboard__button--filter"
              onClick={() => this.props.filterProperties(this.state.filter)}
            >
              Filter
            </button>
            <button
              className="Dashboard__button Dashboard__button--reset"
              onClick={() => this.props.getProperties()}
            >
              Reset
            </button>
          </div>
          <hr className="Dashboard__line" />
          <div>
            <p className="Dashboard__title">Home Listings</p>
            {homeDisplay}
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(state => state, {
  getProperties,
  filterProperties,
  deleteProperty
})(Dashboard);
