import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appFonts, appIcons, colors, HP} from '../../utilities';

export const DetailCard = ({title, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.main}>
        <View style={styles.leftCon}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subTitleStyle}>{subTitle}</Text>
        </View>
        <View style={styles.rightCon}>
          <Image style={styles.imageUri} source={appIcons.rightCurveIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.w1,
    marginHorizontal: -20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 5,
  },
  leftCon: {
    width: '80%',
  },
  rightCon: {},
  imgStyle: {
    width: HP('9'),
    height: HP('9'),
    borderRadius: 100,
    backgroundColor: 'gray',
  },

  titleStyle: {
    fontSize: 16,
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
  },
  subTitleStyle: {
    fontSize: 12,
    color: colors.b6,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 300,
  },

  imageUri: {
    width: 20,
    height: 15,
    tintColor: colors.b1,
  },
});
