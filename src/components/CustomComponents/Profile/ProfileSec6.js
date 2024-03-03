import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {appFonts, colors, size, WP} from '../../../utilities';
import {AppInput} from '../../Inputs/AppInput';

export const ProfileSec6 = ({
  my,
  cardTitle,
  titleFont,
  titleSize,
  titleColor,
  onPressEdit,
  profileImg,
  coverImg,
  proName,
  editable,
  onChangeText,
  selectionColor,
  cvrImgSrc,
  cursorColor,
  placeholder,
  name,
}) => {
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <View style={styles.titleHead}>
        <Text
          style={{
            fontFamily: titleFont || appFonts.poppinRegular,
            fontSize: titleSize || size.normal,
            color: titleColor || colors.b4,
          }}>
          {cardTitle || ''}
        </Text>
        <TouchableOpacity onPress={onPressEdit}>
          <Text style={styles.title2}>Edit</Text>
        </TouchableOpacity>
      </View>
      {profileImg && (
        <View style={styles.imgCon}>
          <Image style={styles.imageUri} source={profileImg} />
        </View>
      )}

      {coverImg && (
        <View style={styles.imgCon}>
          <Image style={styles.coverUri} source={cvrImgSrc} />
        </View>
      )}
      {name && (
        <View style={{}}>
          {/* <Text style={styles.title}>Victoria Malik</Text> */}
          <AppInput
            placeholder={placeholder || ''}
            placeholderTextColor={colors.g1}
            value={proName}
            editable={editable}
            onChangeText={item => onChangeText(item)}
            activeColor={'transparent'}
            outlineColor={'transparent'}
            selectionColor={selectionColor}
            cursorColor={cursorColor}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 210,
    backgroundColor: colors.w1,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },

  titleHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title2: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xsmall,
    color: colors.b1,
  },
  imageUri: {
    width: WP('40'),
    height: WP('40'),
    borderRadius: 100,
    alignSelf: 'center',
  },
  imgCon: {
    marginTop: 10,
  },
  coverUri: {
    width: '100%',
    height: WP('45'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.small,
    color: colors.b1,
  },
});
