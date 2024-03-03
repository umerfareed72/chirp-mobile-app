import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appFonts, appIcons, appImages, colors, size, WP} from '../../utilities';

export const PhotosCard = ({
  height,
  width,
  borderRadius,
  isVideo,
  isBottomVideoIcon,
  onPress,
  disabled = true,
  imageUri,
  icon,
}) => {
  return (
    <View
      style={[
        {
          height: height,
          width: width,
          borderRadius: borderRadius,
        },
      ]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image
          style={[styles.imageStyle, {borderRadius: borderRadius}]}
          source={imageUri || appImages.n1}
        />
        {isVideo && <Image source={appIcons.play} style={styles.videoIcon} />}

        {isBottomVideoIcon && (
          <View style={styles.videoMain}>
            <Image source={appIcons.videoGrayIcon} style={styles.imageUri} />
            <Text style={styles.textStyle}>125</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  videoIcon: {
    height: 40,
    width: 40,
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
    top: WP('24'),
  },
  videoMain: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 100,

    position: 'absolute',
    // resizeMode: 'contain',
    // alignSelf: 'center',
    bottom: 10,

    // marginBottom: 20,
  },
  textStyle: {
    color: colors.w1,
    marginLeft: 5,
    fontSize: size.tiny,
    fontFamily: appFonts.InterRegular,
    fontWeight: 500,
  },

  imageUri: {
    width: 12,
    height: 12,
    marginLeft: 10,
  },
});
