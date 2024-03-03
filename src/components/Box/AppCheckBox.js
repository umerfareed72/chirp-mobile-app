import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  size,
  spacing,
  checkIcon,
  unCheckIcon,
} from '../../utilities';

export const AppCheckbox = ({onPress, title, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[commonstyles.aiRow, spacing.my2]}
      hitSlop={styles.hitSlop}>
      <Image
        style={[commonstyles.icon22]}
        source={
          selected
            ? checkIcon || appIcons.radio1
            : unCheckIcon || appIcons.radio
        }
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 30,
  },
  radioText: {
    fontSize: size.normal,
    fontFamily: appFonts.poppinMedium,
    color: colors.b1,
    marginLeft: 15,
  },
});
