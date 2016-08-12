import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home';

export default class AppContainer extends Component {
  render() {
    return <Home>hello</Home>;
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }

// export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);