import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appFonts, appIcons, colors, size} from '../../utilities';

export const StoryCard = ({profileImg = false, storyImage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCon}>
        {storyImage && <Image source={storyImage} style={styles.imgStyle} />}
      </View>
      {profileImg ? (
        <View style={styles.smCon}>
          <Image source={profileImg} style={styles.smImage} />
        </View>
      ) : (
        <View style={styles.smCon1}>
          <Image source={appIcons.plus} style={styles.iconStyle} />
        </View>
      )}

      <Text numberOfLines={1} style={styles.textStyle}>
        {profileImg ? 'StoryCard' : 'Add Story'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.w1,
  },
  imgCon: {
    height: 100,
    width: 100,
    backgroundColor: colors.g1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  smImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },

  smCon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: colors.w1,
    borderRadius: 50,
  },
  smCon1: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: colors.w1,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    position: 'absolute',
    bottom: 2,
    alignSelf: 'center',
    fontSize: size.xxtiny,
    color: colors.theme_color,
    fontFamily: appFonts.poppinRegular,
  },
});
