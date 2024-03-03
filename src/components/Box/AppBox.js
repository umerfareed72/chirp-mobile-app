import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, commonstyles} from '../../utilities';

export const AppBox = ({
  height = 42,
  width = 42,
  borderRadius = 100,
  bgColor = colors.theme_color,
  icon,
  iconStyle,
  shadowColor = colors.shadowColor,
  borderWidth: borderWidth = 1,
  borderColor = colors.theme_color,
  title,
  titleStyle,
  onPress,
}) => {
  return (
    <View style={commonstyles.aiCenter}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: bgColor,
            height: height,
            width: width,
            borderRadius: borderRadius,
            shadowColor: shadowColor,
            borderWidth: borderWidth,
            borderColor: borderColor,
          },
        ]}>
        {icon && <Image source={icon} style={iconStyle} />}
      </TouchableOpacity>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
});
