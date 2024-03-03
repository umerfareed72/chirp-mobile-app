import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {Fragment} from 'react';
import {appIcons, appImages, colors, HP, spacing, WP} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {useNavigation} from '@react-navigation/native';

export const ImageHeader = ({onPressBack, onPressSearch, onPressShare}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={appImages.s1}
      resizeMode="cover"
      style={styles.image}>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.leftCon}>
          <TouchableOpacity
            onPress={onPressBack ? onPressBack() : () => navigation.goBack()}>
            <Image
              source={appIcons.backArrowIcon}
              style={[styles.backIcon, {tintColor: colors.w1}]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rightCon}>
          <TouchableOpacity
            onPress={onPressSearch}
            style={[styles.btnStyle, spacing.mr2]}>
            <Image source={appIcons.searchIcon} style={styles.iconStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressShare}
            style={[styles.btnStyle, spacing.ml2]}>
            <Image source={appIcons.shareColorIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
  },
  rightCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 14,
    width: 14,
  },
  btnStyle: {
    backgroundColor: colors.w3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: colors.w3,
  },
  image: {
    height: 170,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});
