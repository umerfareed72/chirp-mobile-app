import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appFonts, colors, size} from '../../utilities';

export const AuthFooter = ({
  title,
  fontFamily = appFonts.InterRegular,
  color = colors.b3,
  fontSize = size.normal,
  marginVertical,
  subtitle,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginVertical: marginVertical,
        },
      ]}>
      <Text
        style={[
          styles.h1,
          {fontFamily: fontFamily, fontSize: fontSize, color: color},
        ]}>
        {title || ''}
        <Text onPress={onPress} style={styles.h2}>
          {subtitle}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  h1: {
    fontFamily: appFonts.InterMedium,
    fontSize: size.normal,
    color: colors.b3,
    textAlign: 'center',
  },
  h2: {
    fontFamily: appFonts.InterMedium,
    fontSize: size.normal,
    color: colors.theme_color,
    textAlign: 'center',
  },
});
