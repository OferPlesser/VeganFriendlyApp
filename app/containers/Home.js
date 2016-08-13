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
import SharedStyles from 'VeganFriendly/app/styles'

const buttonSize = 80;

const styles = StyleSheet.create({
	cardContainer: {
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
							source={require('VeganFriendly/app/res/img/food.jpeg')}
							style={{height: 170}}/>
					</Card>
				</View>
				<Search />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps)(Home);