import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
const {
	Text,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} = ReactNative;

export default class Card extends Component {
	constructor(props) {
		super(props);
	}

	_getCardCorner() {
		if (!this.props.showCorner) {
			return null;
		}

		return (
			<View style={styles.cardCorner}>
				<Text 
					style={[this.props.cornerTextStyle]}>
					{this.props.cornerText}
				</Text>
			</View>
		);
	}

	render() {
		return (
			<View>
				<View style={styles.card}>
					<View style={styles.cardInner}>
						<View style={styles.cardContent}>
							{this._getCardCorner()}
							{this.props.children}
						</View>
						<View style={[styles.rightWhite, 
							{backgroundColor: this.props.backgroundColor}]}/>
					</View>
				</View>
				<TouchableOpacity 
					activeOpacity={0.6} 
					onPress={this.props.onPress}
					style={[styles.bottomWhite, 
						{backgroundColor: this.props.backgroundColor}]}>
					<Text 
						style={[styles.linkText, this.props.textStyle]}>
						&lt;
					</Text>
					<Text 
						style={[styles.linkTitle, this.props.textStyle]}>
						{this.props.linkText}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const CARD_OFFSET_X = 20;
const CARD_OFFSET_Y = 60;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	cardInner: {
		flex: 1, 
		flexDirection: 'row',
	},
	cardContent: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'row',
		elevation: 20,
	},
	rightWhite: {
		width: CARD_OFFSET_X,
		marginTop: CARD_OFFSET_Y,
		backgroundColor: 'white',
	},
	bottomWhite: {
		height: CARD_OFFSET_Y,
		marginLeft: CARD_OFFSET_X,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
	},
	cardCorner: {
		height: CARD_OFFSET_Y,
		width: CARD_OFFSET_Y,
		backgroundColor: 'white',
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	linkText: {
		fontSize: 20,
		marginLeft: 20,
		color: 'black',
	},
	linkTitle: {
		textAlign: 'right',
		flex: 1,
		marginRight: 20,
		fontSize: 16,
		color: 'black',
	}
});

Card.propTypes = {
	onPress: PropTypes.func,
	textStyle: Text.propTypes.style,
	backgroundColor: PropTypes.string,
	showCorner: PropTypes.bool,
	cornerText: PropTypes.string,
	cornerTextStyle: Text.propTypes.style,
};

Card.defaultProps = {
	onPress: () => {},
	textStyle: {},
	backgroundColor: 'white',
	showCorner: false,
	cornerText: '',
	cornerTextStyle: {
		color: 'black',
		fontSize: 16,
	},
};
