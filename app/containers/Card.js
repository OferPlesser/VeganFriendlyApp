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
		if (this.props.showCorner) {
			return (
				<View style={styles.cardCorner}>
					<Text 
						style={[{fontSize: 18}, 
							this.props.cornerTextStyle]}>
						{this.props.cornerText}
					</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<View>
				<View style={styles.card}>
					<View style={styles.cardInner}>
						<View style={styles.cardContent}>
							{this._getCardCorner}
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
	cardImage: {
		resizeMode: "cover",
		height: 170,
	},
	cardContent: {
		flex: 1,
		backgroundColor: 'white',
		elevation: 20,
	},
	rightWhite: {
		width: 50,
		backgroundColor: 'white',
	},
	bottomWhite: {
		height: 50,
		marginLeft: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
	},
	cardCorner: {
		height: 50,
		width: 50,
		backgroundColor: 'white',
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 4,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
	},
	linkText: {
		fontSize: 20,
		marginLeft: 20,
	},
	linkTitle: {
		textAlign: 'right',
		flex: 1,
		marginRight: 20,
		fontSize: 24,
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
	cornerTextStyle: {},
};
