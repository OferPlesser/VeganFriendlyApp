import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';
const {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} = ReactNative;

import StyleVars from 'VeganFriendly/StyleVars';

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 15,
    overflow: "hidden",
    backgroundColor: StyleVars.Colors.primary
  },
  buttonText: {
    color: "white",
    fontFamily: StyleVars.Fonts.general,
    fontSize: 14,
    fontWeight: "400"
  }
});

class Button extends Component {
  render() {
    let textStyle = [styles.buttonText, this.props.textStyle];

    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={() => this.onPress()}
        style={[styles.button, this.props.style]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }

  onPress() {
    if (this.props.enabled) {
      this.props.onPress();
    }
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  activeOpacity: PropTypes.number,
  enabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  style: {},
  textStyle: {},
  activeOpacity: 0.8,
  enabled: true
};

export default Button;