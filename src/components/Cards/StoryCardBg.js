import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appFonts, appIcons, appImages, colors, size, WP} from '../../utilities';
import {ImageBackground} from 'react-native';

export const StoryCardBg = ({
  profileImg = false,
  onPressAdd,
  removeText,
  height,
  width,
  imgUri,
}) => {
  return (
    <ImageBackground
      style={[
        styles.container,
        {height: height || 220, width: width || '100%'},
      ]}
      source={imgUri}
      imageStyle={styles.container}>
      {profileImg ? (
        <View style={styles.smCon}>
          <Image source={profileImg} style={styles.smImage} />
        </View>
      ) : (
        <TouchableOpacity onPress={onPressAdd} style={styles.smCon1}>
          <Image source={appIcons.plus} style={styles.iconStyle} />
        </TouchableOpacity>
      )}

      {!removeText ? (
        <Text numberOfLines={1} style={styles.textStyle}>
          {profileImg ? 'StoryCard' : 'Add Story'}
        </Text>
      ) : null}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.b5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCon: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.g1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 10,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  smImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },

  smCon: {
    top: 25,
    backgroundColor: colors.w1,
    borderRadius: 50,
  },
  smCon1: {
    backgroundColor: colors.w1,
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: size.tiny,
    color: colors.w1,
    fontFamily: appFonts.poppinMedium,
    top: WP('10'),
  },
});
