import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appFonts, appIcons, colors, HP, size, WP} from '../../utilities';

export const UploadPictureCard = ({
  title,
  subTitle,
  imageUrl,
  onPress,
  marginTop,
}) => {
  return (
    <View style={[{marginTop: marginTop || 0}]}>
      <Text style={styles.titleStyle}>{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.uploadPicture}>
          {imageUrl != null ? (
            <Image style={styles.selectedImage} source={{uri: imageUrl}} />
          ) : (
            <View style={styles.uploadPictureContainer}>
              <Image style={styles.imageUri} source={appIcons.imageIcon} />
              <Text style={styles.subTitleStyle}>{subTitle}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},

  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 400,
    marginBottom: 15,
  },
  subTitleStyle: {
    fontSize: 8,
    color: colors.theme_color,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 400,
    marginLeft: 10,
  },

  imageUri: {
    width: 12,
    height: 10,
    resizeMode: 'contain',
  },
  uploadPicture: {
    borderRadius: 6,
    width: WP('90%'),
    height: 140,
    backgroundColor: colors.g9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadPictureContainer: {
    width: 130,
    height: 20,
    borderRadius: 11,
    borderColor: colors.red2,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedImage: {
    width: WP('90%'),
    height: '100%',
    // resizeMode: 'contain',
    borderRadius: 6,
  },
});
