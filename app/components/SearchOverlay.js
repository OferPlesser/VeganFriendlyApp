import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Text,
	View,
	StyleSheet,
	TextInput,
} = ReactNative;

import SharedStyles from 'VeganFriendly/app/styles'

const styles = StyleSheet.create({
	searchTextbox: {
		textAlign: 'right',
		fontSize: 60,
		color: '#222',
		padding: 20,
		paddingTop: 0,
		flex: 1,
		height: 220,
		fontFamily: 'heebo',
	},
	searchTextTitle: {
		fontFamily: 'Arial',
		color: '#888',
		fontSize: 26,
		alignSelf: 'flex-end',
	},
	backgroundStyle: {
		elevation: 50,
	},
});

export default class SearchOverlay extends Component {
	render() {
		if (!this.props.visible) {
			return null;
		}

		return (
			<View style={[this.props.backgroundStyle, 
					SharedStyles.fullScreenComponent,
					styles.backgroundStyle]}>
				<View>
					<Text 
						style={[styles.searchTextTitle, this.props.titleTextStyle]}>
						{this.props.titleText}
					</Text>
					<TextInput
						underlineColorAndroid='rgba(0,0,0,0)'
						autoFocus= { true }
						blurOnSubmit={ true }
						returnKeyType={ 'search' }
						multiline={ true }
						style={[styles.searchTextbox, this.props.textStyle]} />
				</View>
			</View>
		);
	}
}

SearchOverlay.propTypes = {
	textStyle: Text.propTypes.style,
	titleText: PropTypes.string,
	backgroundStyle: View.propTypes.style,
	titleTextStyle: Text.propTypes.style,
	visible: PropTypes.bool,
};

SearchOverlay.defaultProps = {
	textStyle: {},
	titleText: '',
	backgroundStyle: {},
	titleTextStyle: {},
	visible: false,
};
