import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, WP} from '../../../utilities';
import {ClipCard} from '../../Cards/ClipCard';

export const Section4 = ({
  onPressDot,
  onPressCross,
  onPressCard,
  onPressClip,
  onPressCreate,
}) => {
  return (
    <View style={styles.container}>
      <ClipCard
        onPressDot={onPressDot}
        onPressCross={onPressCross}
        onPressCard={onPressCard}
        onPressClip={onPressClip}
        onPressCreate={onPressCreate}
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
