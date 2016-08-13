import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home';

export default class AppContainer extends Component {
  render() {
    return <Home />;
  }
}

export default connect(() => { return {} })(AppContainer);