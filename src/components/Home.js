import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/Index";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="box" style={{ backgroundColor: `${this.props.color}` }}>
        <button className="button-box" onClick={() => this.props.loadColor()}>
          Change Color
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    color: state.color
  };
};

export default connect(mapStateToProps, actionCreators)(Home);
