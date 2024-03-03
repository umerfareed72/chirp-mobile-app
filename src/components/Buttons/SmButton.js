import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appFonts, colors, size} from '../../utilities';

export const SmButton = ({
  onPress,
  bgColor,
  title,
  leftIcon,
  shadowColor,
  iconColor,
  textColor,
  width = 100,
  height = 30,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnContainer,
        {
          shadowColor: shadowColor,
          backgroundColor: bgColor,
          height: height,
          width: width,
        },
      ]}>
      <Image
        style={[
          styles.iconStyle,
          {
            tintColor: iconColor,
          },
        ]}
        source={leftIcon}
      />
      <Text
        style={[
          styles.title,
          {
            color: textColor,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.theme_color,
    width: 100,
    margin: 5,
  },
  title: {
    fontFamily: appFonts.InterMedium,
    color: colors.w1,
    fontSize: size.tiny,
  },
  iconStyle: {
    height: 14,
    width: 14,
    marginRight: 10,
    resizeMode: 'contain',
  },
});
