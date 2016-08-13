import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactNative from 'react-native'
import { bindActionCreators } from 'redux'
const {
	Image,
	Text,
	View,
	StyleSheet,
} = ReactNative

import { ActionCreators } from 'VeganFriendly/app/actions'
import Search from 'VeganFriendly/app/components/Search'
import Card from 'VeganFriendly/app/containers/Card'
import SharedStyles from 'VeganFriendly/app/styles'

import RecipesModule from 'VeganFriendly/app/modules/index.recipes'

const buttonSize = 80;

const styles = StyleSheet.create({
	cardContainer: {
		margin: 40,
		flex: 1,
	},
	card: {
		elevation: 40,
	}
});

class Home extends Component {
	constructor(props) {
	  super(props);
	}

	_getCards() {
		return new RecipesModule().getCard()
	}

	render() {
		return (
			<View style={[SharedStyles.fullScreenComponent, 
				{backgroundColor: '#dedede'}]}>
				<View style={[SharedStyles.fullScreenComponent, styles.cardContainer]}>
					{this._getCards()}
				</View>
				<Search
					onPress={ () => { this.props.toggleSearch('a', ['a'], 10, 4) } } />
			</View>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return state; }, mapDispatchToProps)(Home);