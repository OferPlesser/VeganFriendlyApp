import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Text,
	View,
	StyleSheet,
} = ReactNative;
import Search from 'VeganFriendly/app/components/Search';

const buttonSize = 80;

const styles = StyleSheet.create({
	searchButton: {
		width: buttonSize,
		height: buttonSize,
		borderRadius: buttonSize / 2,
		alignSelf: 'center',
		margin: 10,
	},
	searchButtonContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	fullScreenComponent: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 0,
	}
});

class Home extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
	return (
			<View style={styles.fullScreenComponent}>
				<Search />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Home);