import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Text,
	View,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	UIManager,
} = ReactNative;

import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from 'VeganFriendly/app/components/Button';
import SearchOverlay from './SearchOverlay'
import SharedStyles from 'VeganFriendly/app/styles'

const buttonSize = 60;

const styles = StyleSheet.create({
	searchButton: {
		width: buttonSize,
		height: buttonSize,
		alignSelf: 'flex-end',
		margin: 20,
		backgroundColor: '#ff458f',
		borderRadius: 0,
		elevation: 55,
	},
	searchButtonContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	buttonImage: {
		width: 20,
		height: 20,
	},
});

class Search extends Component {
	constructor(props) {
	  super(props);

	  UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	render() {
		var searchButtonStyles = this.props.searching ? 
			{ flex: 1, margin: 0 } : {};

		return (
			<View style={[SharedStyles.fullScreenComponent]}>
				<SearchOverlay 
					visible={this.props.searching} 
					backgroundStyle={{backgroundColor: 'rgba(255,255,255,0.9)'}} 
					titleText={'חפש הכל'}/>
				<View style={styles.searchButtonContainer}>
					<Button 
						onPress={ () => this.props.onPress() }
						style={[styles.searchButton, searchButtonStyles]}>
						<Image 
							style={styles.buttonImage}
							source={require('VeganFriendly/app/res/img/icon-search.png')}/>
					</Button>
				</View>
				<KeyboardSpacer/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		searching: state.search.searching
	};
}

export default connect(mapStateToProps)(Search);