import React from 'react';
import {Modal, StyleSheet, View, Image} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../utilities';
import {AppHeader} from '../Headers/AppHeader';

export const PicturePreviewModal = ({show, onPressHide, title, imageUri}) => {
  return (
    <Modal
      //   coverScreen={true}
      backdropColor={colors.w1}
      backdropOpacity={1}
      onRequestClose={onPressHide}
      visible={show}>
      <AppHeader onPressBack={onPressHide} title={'Preview Image'} />

      <View>
        <Image style={styles.imageUri} source={imageUri} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageUri: {
    height: HP(100),
    width: WP(100),
    resizeMode: 'cover',
  },
});
