import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {appFonts, appIcons, colors, WP} from '../../utilities';

export const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
}) => {
  return (
    <Modal onBackdropPress={onPressHide} isVisible={show}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
          <View style={styles.leftContainer}>
            <Image source={appIcons.themeCamera} style={[styles.cameraIcon]} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.btnText, {color: colors.b1}]}>
              Take Image from Camera
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
          <View style={styles.leftContainer}>
            <Image source={appIcons.galleryIcon} style={[styles.galleryIcon]} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.btnText, {color: colors?.b1}]}>
              Pick Image from Gallery
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 30,
  },
  separator: {
    borderWidth: 0.5,
    width: '100%',
  },

  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: WP('4'),
    fontFamily: appFonts.poppinMedium,
    paddingVertical: WP('5'),
    textAlign: 'left',
  },
  cameraIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  galleryIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',

    paddingVertical: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
