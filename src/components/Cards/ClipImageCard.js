import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appFonts, appImages, colors, size} from '../../utilities';

export const ClipImageCard = ({h1, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.section2}>
        <View style={styles.imgCon}>
          <Image style={styles.imgStyle} source={icon} />
          <Text style={styles.h1}>{h1}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  section2: {
    marginVertical: 10,
    padding: 5,
  },
  imgCon: {
    height: 150,
    width: 130,
    borderRadius: 10,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  h1: {
    fontSize: size.tiny,
    position: 'absolute',
    color: colors.w1,
    fontFamily: appFonts.InterSemiBold,
    bottom: 10,
    left: 20,
  },
});
