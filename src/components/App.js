import React, { PropTypes } from "react";
import { Router } from "react-router";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <section className="container-fluid">{this.props.children}</section>;
  }
}

App.propTypes = {};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
