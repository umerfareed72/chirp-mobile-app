import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  colors,
  HP,
  appIcons,
  appImages,
  WP,
  size,
  appFonts,
} from '../../utilities';

export const BottomSheetCard = ({imageUri, title, onPress}) => {
  return (
    <>
      <View style={styles.main} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.section}>
          <Image style={styles.imageUri} source={imageUri} />
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
  },
  section: {
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
