import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
  WP,
} from '../../../utilities';
import {SmButton} from '../../Buttons/SmButton';
import {PhotosCard} from '../../Cards/PhotoCard';

export const PageSection2 = ({list, desc, h1, h2, icon}) => {
  return (
    <View style={styles.container}>
      <PhotosCard imageUri={icon} height={75} borderRadius={10} />
      <View style={styles.leftCon}>
        <Image source={appImages.profileImage} style={styles.smImage} />
        <View style={[spacing.ml4, spacing.my1]}>
          <Text style={[styles.h1]}>{h1 || 'Page Name'}</Text>
          <Text style={[styles.h2]}>{h2 || 'Category'}</Text>
        </View>
      </View>
      <Text style={styles.h3}>49k People Like This</Text>
      <View style={commonstyles.aiRow}>
        <SmButton
          bgColor={colors.g6}
          title={'Like'}
          leftIcon={appIcons.likeColorIcon}
          textColor={colors.theme_color}
          shadowColor={colors.g6}
        />
        <SmButton
          title={'Message'}
          leftIcon={appIcons.messengerIcon}
          bgColor={colors.theme_color}
          textColor={colors.w1}
          shadowColor={colors.theme_color}
          iconColor={colors.w1}
        />
      </View>
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
    marginRight: 10,
  },
  iconStyle: {
    height: 12,
    width: 12,
    tintColor: colors.theme_color,
  },

  h3: {
    fontSize: size.xxtiny,
    color: colors.theme_color,
    fontFamily: appFonts.poppinRegular,
    marginVertical: 5,
    marginLeft: 5,
  },
  leftCon: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
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
    color: colors.b1,
  },
  btnCon: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
  },
});
