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
		margin: 10,
		backgroundColor: '#ff458f',
		borderRadius: 0,
		elevation: 55,
	},
	searchButtonContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	buttonImage: {
		width: 30,
		height: 30,
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

	render() {
		return (
			<View style={[SharedStyles.fullScreenComponent]}>
				<SearchOverlay 
					visible={this.state.searching} 
					backgroundStyle={{backgroundColor: 'rgba(255,255,255,0.9)'}} 
					titleText={'חפש הכל'}/>
				<View style={styles.searchButtonContainer}>
					<Button 
						onPress={ () => {this.searchPressed()} }
						style={styles.searchButton}>
						<Image 
							style={styles.buttonImage}
							source={require('VeganFriendly/app/res/img/magnifying-glass.png')}/>
					</Button>
					<KeyboardSpacer/>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Search);