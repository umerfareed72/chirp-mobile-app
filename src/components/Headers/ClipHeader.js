import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  size,
  spacing,
} from '../../utilities';

export const ClipHeader = ({h1, icon, onPressThreeDot, onPressCross}) => {
  return (
    <View style={styles.section1}>
      <View style={styles.leftCon}>
        <Image source={icon} style={styles.smImage} />
        <View style={[spacing.ml6, spacing.my1]}>
          <Text style={styles.h1}>{h1}</Text>
        </View>
      </View>

      <View style={styles.rightCon}>
        <TouchableOpacity
          hitSlop={commonstyles.hitSlop20}
          onPress={onPressThreeDot}>
          <Image source={appIcons.threeDotsIcon} style={styles.threeDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftCon: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  smImage: {
    height: 16,
    width: 16,
  },
  h1: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.tiny,
    color: colors.theme_color,
  },
  h2: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxtiny,
    color: colors.g10,
  },
  rightCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '20%',
    height: '100%',
  },
  threeDot: {
    width: 20,
    height: 5,
    tintColor: colors.b1,
    resizeMode: 'contain',
    marginRight: 20,
  },
  crossIcon: {
    width: 10,
    height: 10,
    tintColor: colors.b1,
    resizeMode: 'contain',
  },
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
