import React, {Fragment} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {appIcons, appImages, colors, spacing, WP} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';

export const HomeHeader = ({
  onPrSearchIco,
  onPressChat,
  notiIcon,
  onPressNotiIcon,
}) => {
  return (
    <Fragment>
      <MyStatusBar backgroundColor={colors.w4} />
      <View style={styles.container}>
        <View style={styles.leftCon}>
          <Image source={appImages.l2} style={[styles.imageStyle]} />
        </View>
        <View style={styles.rightCon}>
          <TouchableOpacity onPress={onPrSearchIco} style={[styles.btnStyle]}>
            <Image source={appIcons.searchIcon} style={styles.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressNotiIcon}
            style={[styles.btnStyle, spacing.mx4]}>
            <Image
              source={appIcons.tabFifthColorIcon}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnStyle]} onPress={onPressChat}>
            <Image source={appIcons.messenger} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 35,
    width: 70,
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: WP('4'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: colors.w4,
    shadowColor: colors.w5,
    shadowOpacity: 0.9,

    shadowOffset: {
      height: 2,
      width: 2,
    },
    zIndex: 99999,
  },
  rightCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  btnStyle: {
    backgroundColor: colors.g18,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    // borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    // borderColor: colors.w3,
  },
});
