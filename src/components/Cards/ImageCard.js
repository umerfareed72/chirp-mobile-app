import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appFonts, colors, size} from '../../utilities';

export const ImageCard = ({
  imageUri,
  height,
  width,
  borderRadius,
  borderWidth,
}) => {
  return (
    <>
      <Image
        style={[
          styles.imageUri,
          {
            height: height || 40,
            width: width || 40,
            borderWidth: borderWidth || 0,
            borderRadius: borderRadius || 0,
            borderColor: borderColor || colors.theme_color,
          },
        ]}
        source={imageUri}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20,
  },

  imageUri: {
    width: 23,
    height: 18,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.b1,
    marginLeft: 27,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 300,
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
