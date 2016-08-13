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

const buttonSize = 60;

const styles = StyleSheet.create({
	searchButton: {
		width: buttonSize,
		height: buttonSize,
		alignSelf: 'flex-end',
		margin: 10,
		backgroundColor: '#ff458f',
		borderRadius: 0,
		elevation: 5,
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
	},
	searchTextbox: {
		textAlign: 'right',
		fontSize: 60,
		color: '#333',
		padding: 20,
		paddingTop: 0,
		flex: 1,
		fontFamily: 'Heebo',
	},
	buttonImage: {
		width: 30,
		height: 30,
	},
	searchTextTitle: {
		fontFamily: 'Heebo-Regular',
		color: '#ccc',
		fontSize: 26,
		alignSelf: 'flex-end',
		height: 70,
	},
});

class Search extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	searching: false,
	  };

	  UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	searchPressed() {
		this.setState({
			searching: !this.state.searching
		});
	}

	_renderSearchView() {
		if (this.state.searching) {
			return (
				<View style={{flex: 5}}>
					<Text style={styles.searchTextTitle}>חפש הכל</Text>
					<TextInput
						underlineColorAndroid='rgba(0,0,0,0)'
						autoFocus= { true }
						blurOnSubmit={ true }
						returnKeyType={ 'search' }
						multiline={ true }
						style={[styles.searchTextbox]}/>
				</View>
			);
		}
		return null;
	}

	render() {
		return (
			<View style={[{backgroundColor: 'rgba(256,256,256,0.8)'}, styles.fullScreenComponent]}>
				{this._renderSearchView()}
				<View style={styles.searchButtonContainer}>
					<Button 
						style={styles.searchButton} 
						onPress={ () => { this.searchPressed() } }>
						<Image 
							style={styles.buttonImage}
							source={require('VeganFriendly/app/res/img/magnifying-glass.png')}/>
					</Button>
				</View>
				<KeyboardSpacer />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Search);