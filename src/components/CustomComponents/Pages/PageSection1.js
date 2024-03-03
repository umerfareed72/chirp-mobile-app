import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  size,
  spacing,
  WP,
} from '../../../utilities';
import {AuthField} from '../../Fields/AuthField';

export const PageSection1 = ({list, desc}) => {
  const LabelText = ({item}) => {
    return (
      <View style={[commonstyles.aiRow]}>
        <Image style={styles.iconStyle} source={item?.icon} />
        <Text style={styles.h1}>{item?.title || 'dasdas'}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={spacing.mb3}>
        <AuthField
          title={'About'}
          fontSize={size.xsmall}
          color={colors.b1}
          fontFamily={appFonts.poppiFnMedium}
        />
      </View>
      {list?.map(item => {
        return (
          <View>
            <LabelText item={item} />
          </View>
        );
      })}
      {desc && (
        <View style={[commonstyles.aiRow]}>
          <Image style={styles.iconStyle} source={appIcons.infoIcon} />
          <Text style={styles.h2}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    padding: WP('4'),
    backgroundColor: colors.w1,
    borderRadius: 10,
    marginVertical: 10,
  },
  iconStyle: {
    height: 12,
    width: 12,
    tintColor: colors.theme_color,
  },
  h1: {
    fontSize: size.xxtiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.theme_color,
    marginLeft: 20,
    marginVertical: 5,
  },
  h2: {
    fontSize: size.xxtiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.b1,
    marginLeft: 20,
    marginVertical: 5,
    lineHeight: 18,
  },
});
