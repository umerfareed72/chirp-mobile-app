import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {appAnimations, appImages} from '../../utilities';

import Lottie from 'lottie-react-native';

export const MusicBox = ({onPress, animationRef, isMusicPlayed}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.imageUri} source={appImages.profileImage} />
      </TouchableOpacity>

      {isMusicPlayed && (
        <Lottie
          ref={animationRef}
          source={appAnimations.music}
          style={{height: 150}}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageUri: {width: 120, height: 150, borderRadius: 8},
});
