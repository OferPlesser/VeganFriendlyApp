import ReactNative from 'react-native';
const {
	StyleSheet,
} = ReactNative;

export default {
	fullScreenComponent: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 0,
	},
	card: {
		elevation: 40,
	},
	cardBanner: {
		height: 170, 
		resizeMode: 'cover', 
		flex: 1,
	},
}