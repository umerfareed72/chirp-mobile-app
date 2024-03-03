import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
  WP,
} from '../../../utilities';

export const Section2 = ({
  onPress,
  opnePressCamera,
  onPressGallery,
  onPressVideo,
}) => {
  return (
    <View style={styles.container}>
      <View style={[commonstyles.row, spacing.m2]}>
        <Text style={styles.h1}>Create Post</Text>
        <View style={commonstyles.aiRow}>
          {/* <TouchableOpacity onPress={onPressVideo}>
            <Image source={appIcons.videoColorIcon} style={styles.imgStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressGallery}>
            <Image source={appIcons.galleryColorIcon} style={styles.imgStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={opnePressCamera}>
            <Image source={appIcons.cameraColorIcon} style={styles.imgStyle} />
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onPress} style={styles.inputStyle}>
          <View style={styles.leftCon}>
            <Image source={appImages.profileImage} style={styles.smCon1} />
          </View>
          <Text style={styles.h1}>Whats on your mind?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: appFonts.InterMedium,
    color: colors.g10,
    fontSize: size.xxtiny,
  },
  container: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    padding: WP('4'),
    backgroundColor: colors.w1,
    borderRadius: 10,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smCon1: {
    backgroundColor: colors.w1,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 85,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: colors.g5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.w1,
  },
  leftCon: {
    width: '20%',
  },
  imgStyle: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});
