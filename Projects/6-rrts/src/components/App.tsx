import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
