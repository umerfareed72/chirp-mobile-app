import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {appFonts, colors, HP, size, WP} from '../../utilities';

export const SettingsCard = ({cardText, src, onPress}) => {
  return (
    <LinearGradient
      colors={['#D6E3F3', '#FFFFFF']}
      start={{x: 8, y: 0}}
      end={{x: 0, y: 0}}
      style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={src} style={styles.imgStyle} />
        <Text style={styles.textStyle}>{cardText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  titleBox: {
    fontSize: size.normal,
    fontFamily: appFonts.gilroyMedium,
    color: colors.black,
  },
  aiRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.g4,
    height: 35,
  },
  btnCon: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60,
    borderRadius: 5,
    flexDirection: 'row',
  },
  btnText: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: appFonts.poppinMedium,
  },

  contre: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '45%',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: colors.g5,
    borderWidth: 1,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  imgStyle: {
    height: 22,
    width: 29,
    alignSelf: 'center',
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
  textStyle: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.medium,
    color: colors.theme_color,
    marginTop: 2,
    // fontWeight: 400,
  },
});
