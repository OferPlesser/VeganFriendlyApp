import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
const {
	Image,
	Text,
	View,
	StyleSheet,
} = ReactNative;

import { ActionCreators } from 'VeganFriendly/app/actions';
import Search from 'VeganFriendly/app/components/Search';
import Card from 'VeganFriendly/app/containers/Card';
import SharedStyles from 'VeganFriendly/app/styles'

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

	render() {
		return (
			<View style={[SharedStyles.fullScreenComponent, 
				{backgroundColor: '#dedede'}]}>
				<View style={[SharedStyles.fullScreenComponent, styles.cardContainer]}>
					<Card 
						style={ styles.card }
						linkText={ 'מתכונים' } 
						cornerText={ '104' }
						showCorner={ true }
						onPress={ () => {console.log('heeeyyy')} }>
						<Image
							source={require('VeganFriendly/app/res/img/food.png')}
							style={{height: 170, resizeMode: 'cover', flex: 1}}/>
					</Card>
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