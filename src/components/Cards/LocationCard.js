import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, WP, appFonts, size} from '../../utilities';
export const LocationCard = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButton}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  appButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: colors.theme_color,
    marginVertical: 10,
    paddingHorizontal: WP('4'),
  },
  textStyle: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.medium,
    color: colors.b1,
    marginTop: 2,
    // fontWeight: 400,
  },
});
