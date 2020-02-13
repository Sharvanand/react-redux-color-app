import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/Index";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col s12 m6">
            <div
              className="card "
              style={{ backgroundColor: `${this.props.color}` }}
            >
              <div className="card-content">
                <span className="card-title black-text">Color App</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="waves-effect waves-light btn-small blue"
          onClick={() => this.props.loadColor()}
        >
          Change Color
        </a>
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
