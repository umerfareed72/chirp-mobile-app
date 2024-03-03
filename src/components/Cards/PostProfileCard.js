import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  size,
  spacing,
} from '../../utilities';

const PostProfileCard = ({
  h1,
  h2,
  icon,
  onPressThreeDot,
  onPress,
  onPressCross,
  disable,
  fontFamily = appFonts.poppinRegular,
  h2Color = colors.g10,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.section1}>
      <View style={styles.leftCon}>
        <Image source={icon} style={styles.smImage} />
        <View style={[spacing.ml4, spacing.my1]}>
          <Text
            style={[
              styles.h1,
              {
                fontFamily: fontFamily,
              },
            ]}>
            {h1}
          </Text>
          {h2 && (
            <Text
              style={[
                styles.h2,
                {
                  color: h2Color,
                },
              ]}>
              {h2}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.rightCon}>
        {onPressThreeDot && (
          <TouchableOpacity
            hitSlop={commonstyles.hitSlop20}
            onPress={onPressThreeDot}>
            <Image source={appIcons.threeDotsIcon} style={styles.threeDot} />
          </TouchableOpacity>
        )}
        {onPressCross && (
          <TouchableOpacity
            hitSlop={commonstyles.hitSlop20}
            onPress={onPressCross}>
            <Image source={appIcons.closeIcon} style={styles.crossIcon} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PostProfileCard;

const styles = StyleSheet.create({
  leftCon: {
    width: '70%',
    flexDirection: 'row',
  },
  smImage: {
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  h1: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.tiny,
    color: colors.b1,
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
    width: '30%',
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
