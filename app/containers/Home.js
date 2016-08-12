import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Text,
} = ReactNative;

class Home extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<Text>
				Hello
			</Text>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Home);