import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import Images from '../styles/imgs/recipesImages'
const {
	Text,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} = ReactNative;

export default class RecipeCard extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
		<View style={{height:150, margin: 10, elevation: 20,}}>
		<View style={styles.container}>
			<View style={styles.imageSpace}>
				<View style={styles.imageSpaceViewHeart1}>
					<View style={styles.imageSpaceViewHeart2}>
						<Image style={styles.heartIcon} source={Images['icon']['heart']} />
					</View>
				</View>
				<Image style={styles.innerImage} source={this.props.foodImage} />
			</View>
			<View style={styles.textSpace}>
				<View style={styles.avatarSpace}>
					<Image style={styles.avatarImage} source={this.props.userPicture} />
				</View>
				<View style={styles.innerTextSpace}>
					<View style={styles.timeView}>
						<Image
							style={styles.timeImage}
							source={require('../styles/imgs/clock_icon.png')} />
						<Text style={styles.timeText}>עכשיו</Text>
					</View>
					<Text style={styles.nameText}>{this.props.userName}</Text>
					<Text style={styles.informationText} >{this.props.foodDesc}</Text>
				</View>
			</View>
		</View>
		</View>
		);
	}
}

RecipeCard.propTypes = {
	foodImage: PropTypes.number, /* Image */
	userPicture: PropTypes.number, /* Image */
	userName: PropTypes.string,
	foodDesc: PropTypes.string,
};

RecipeCard.defaultProps = {
	foodImage: Images['button'][0],
	userPicture: Images['avatar'][0],
	userName: "מיכאל הופמן",
	foodDesc: "שניצל פוט במרינדה",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: "white",
	},
		imageSpace: {
			flex: 7,
			borderWidth: 0,
		},
			imageSpaceViewHeart1: {position:'absolute', zIndex: 2, top: 0, left: 0, right: 0, bottom: 0, },
			imageSpaceViewHeart2: {flex: 1, alignItems: 'center', justifyContent: 'center',},
			heartIcon: {height: 20, width:20, resizeMode: "contain",},
			innerImage: {
				resizeMode: "cover",
			},
		textSpace: {
			flex: 18, 
			flexDirection: 'row-reverse',
		},
			avatarSpace: {
				width: 50,
				height: 150,
			},
				avatarImage: {
					height: 50,
					resizeMode: "cover",
				},
			innerTextSpace: {
				flex: 1,
				alignItems:'flex-end',
				padding: 16,
			},
				timeView:{
					flexDirection: 'row-reverse',
					marginBottom: 25,
				},
					timeImage: {
						height: 16,
						width: 16,
						padding: 0,
						margin: 0,
						marginLeft: 6,
						marginTop: 4,
					},
					timeText: {						
						opacity: 0.4,
						fontFamily: "Heebo",
						fontWeight: "500",
						lineHeight: 2,
						letterSpacing: 2,
						color: "rgba(0, 0, 0, 0.4)",
						fontSize:16,
						padding:0,
						margin:0,
					},
				nameText: {
					fontFamily: "Heebo",
					fontSize: 20,
					fontWeight: "500",
					lineHeight: 2,
					letterSpacing: 0.5,
					textAlign: "right",
					color: "black",
				},
				informationText: {					
					opacity: 0.8,
					fontFamily: "Heebo",
					fontSize: 16,
					fontWeight: "400",
					lineHeight: 2,
					letterSpacing: 0.5,
					textAlign: "right",
					color: "rgba(0, 0, 0, 0.8)",
				},	
});

