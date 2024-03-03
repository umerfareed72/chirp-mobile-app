import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostProfileCard from '../../Cards/PostProfileCard';
import {appIcons, appImages, colors, WP} from '../../../utilities';
import PostFooter from '../../Cards/PostFooter';

export const Section5 = ({icon, h1, h2, onPressCross, onPressThreeDot}) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <PostProfileCard
          icon={appImages.profileImage}
          h1={'Victoria Malik'}
          h2={'3 hours ago'}
          onPressCross={onPressCross}
          onPressThreeDot={onPressThreeDot}
        />
      </View>
      <View style={styles.section2}>
        <View style={styles.imgCon}>
          <Image source={appImages.profileImage} style={styles.imgStyle} />
        </View>
      </View>
      <PostFooter />
    </View>
  );
};

const styles = StyleSheet.create({
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
  section1: {},
  section2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  imgCon: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g12,
    borderColor: colors.g12,
  },
  imgStyle: {
    height: '95%',
    width: '95%',
    borderRadius: 100,
  },
});
