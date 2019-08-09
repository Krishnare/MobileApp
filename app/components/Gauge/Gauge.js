/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
/* eslint radix: ["error", "as-needed"] */
import React, { Component } from "react";
import { View, Image, Animated, Easing, Text } from "react-native";
import PropTypes from "prop-types";

// Utils

// Style
import style, { width as deviceWidth } from "./styles";
import speedometer1 from "./../../assets/images/speedometer1.png";

// eslint-disable-next-line react/prefer-stateless-function
class Gauge extends Component {
  constructor(props) {
    super(props);
    this.speedometerValue = new Animated.Value(props.defaultValue);
  }
  calculateDegreeFromLabels = (degree, labels) => {
    const perLevelDegree = degree / labels.length;
    return perLevelDegree;
  };
  calculateLabelFromValue = (value, labels, minValue, maxValue) => {
    const currentValue = value / (maxValue - minValue);
    const currentIndex = Math.round((labels.length - 1) * currentValue);
    const label = labels[currentIndex];
    return label;
  };
  limitValue = (value, minValue, maxValue) => {
    let currentValue = 0;
    if (!isNaN(value)) {
      currentValue = parseInt(value);
    }
    return Math.min(Math.max(currentValue, minValue), maxValue);
  };
  validateSize = (current, original) => {
    let currentSize = original;
    if (!isNaN(current)) {
      currentSize = parseInt(current);
    }
    return currentSize;
  };
  render() {
    const {
      value,
      size,
      minValue,
      maxValue,
      easeDuration,
      labels,
      needleImage,
      wrapperStyle,
      outerCircleStyle,
      halfCircleStyle,
      imageWrapperStyle,
      imageStyle,
      innerCircleStyle,
      labelWrapperStyle,
      labelStyle,
      labelNoteStyle
    } = this.props;
    const degree = 180;
    const perLevelDegree = this.calculateDegreeFromLabels(degree, labels);
    const label = this.calculateLabelFromValue(
      this.limitValue(value, minValue, maxValue),
      labels,
      minValue,
      maxValue
    );
    Animated.timing(this.speedometerValue, {
      toValue: this.limitValue(value, minValue, maxValue),
      duration: easeDuration,
      easing: Easing.linear
    }).start();

    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ["-90deg", "90deg"]
    });

    const currentSize = this.validateSize(size, deviceWidth - 20);
    return (
      <View
        style={[
          style.wrapper,
          {
            width: currentSize,
            height: currentSize / 2
          },
          wrapperStyle
        ]}
      >
        <Image
          source={speedometer1}
          style={{
            width: currentSize,
            height: currentSize / 2,
            resizeMode: "contain"
          }}
        />
        <Animated.View
          style={[
            style.imageWrapper,
            {
              top: -(currentSize / 15),
              transform: [{ rotate }]
            },
            imageWrapperStyle
          ]}
        >
          <Image
            style={[
              style.image,
              {
                width: currentSize,
                height: currentSize
              },
              imageStyle
            ]}
            source={needleImage}
          />
        </Animated.View>
        <View
          style={[
            style.innerCircle,
            {
              width: currentSize * 0.9,
              height: (currentSize / 2) * 0.9,
              borderTopLeftRadius: currentSize / 2,
              borderTopRightRadius: currentSize / 2
            },
            innerCircleStyle
          ]}
        />
      </View>
    );
  }
}

Gauge.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  labels: [],
  needleImage: require("./../../assets/images/speedometer-needle.png"),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {}
};

Gauge.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object
};

export default Gauge;
