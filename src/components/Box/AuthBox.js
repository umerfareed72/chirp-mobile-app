import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {appImages, colors} from '../../utilities';

export const AuthBox = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={appImages.l2} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 32,
    width: 80,
    resizeMode: 'contain',
  },

  header: {
    height: 120,
    width: 120,
    backgroundColor: colors.w1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -50,
    borderRadius: 16,
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    alignSelf: 'center',
  },
});
