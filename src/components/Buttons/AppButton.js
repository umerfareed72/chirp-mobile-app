import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appFonts, colors, size} from '../../utilities';

export const AppButton = ({
  leftIcon,
  title,
  onPress,
  bgColor = colors.theme_color,
  icon,
  shadowColor = colors.theme_color,
  height,
  width,
  image,
  marginVertical,
  borderRadius,
  titleColor = colors.w1,
  lefIcoH,
  lefIcoW,
  marginTop,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,

        {
          backgroundColor: bgColor,
          shadowColor: shadowColor,
          width: width || '100%',
          height: height || 52,
          marginVertical: marginVertical || 0,
          borderRadius: borderRadius || 8,
          marginTop: marginTop || 0,
        },
      ]}>
      {leftIcon && (
        <Image
          source={leftIcon}
          style={[
            styles.iconStyle1,
            {height: lefIcoH || 22, width: lefIcoW || 22},
          ]}
        />
      )}
      <Text
        style={[
          styles.title,
          {
            color: titleColor,
            fontSize: fontSize || size.normal,
          },
        ]}>
        {title}
      </Text>
      {image && <Image source={icon} style={[styles.iconStyle]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    shadowColor: colors.theme_color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  title: {
    fontFamily: appFonts.InterMedium,
    color: colors.w1,
    fontSize: size.normal,
  },
  iconStyle: {
    marginLeft: 10,
    height: 12,
    width: 12,
  },
  iconStyle1: {
    marginRight: 10,
    resizeMode: 'contain',
  },
});
