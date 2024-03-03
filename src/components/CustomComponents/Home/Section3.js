import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PostCard} from '../../Cards/PostCard';
import {colors, WP} from '../../../utilities';

export const Section3 = ({
  isVideo,
  onPressDot,
  onPressCross,
  isPhoto,
  onPressVideo,
  onPressPic,
  onPressLike,
  onPressComment,
  onPressShare,
}) => {
  return (
    <View style={styles.container}>
      <PostCard
        onPressPic={item => onPressPic(item)}
        onPress={onPressVideo}
        onPressCross={onPressCross}
        onPressThreeDot={onPressDot}
        isVideo={isVideo}
        isPhoto={isPhoto}
        onPressVideo={onPressVideo}
        onPressLike={onPressLike}
        onPressComment={onPressComment}
        onPressShare={onPressShare}
      />
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
});
