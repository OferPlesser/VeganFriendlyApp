import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Image,
	Text,
	View,
	StyleSheet,
} = ReactNative;

import Search from 'VeganFriendly/app/components/Search';
import Card from 'VeganFriendly/app/containers/Card';
import RecipeCard from 'VeganFriendly/app/containers/Recipe'
import Images from '../styles/imgs/recipesImages'

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
	},
	cardContainer: {
		backgroundColor: '#dedede',
		margin: 20,
		flex: 1,
	},
	card: {
		
	}
});

class Home extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<View style={[styles.fullScreenComponent, styles.cardContainer]}>
				<RecipeCard></RecipeCard>
				<RecipeCard 
					userName="אורית פרחי" 
					foodDesc="עוגת גבינה ופירורים"
					userPicture={Images['avatar'][1]}
					foodImage={Images['button'][1]}></RecipeCard>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Home);