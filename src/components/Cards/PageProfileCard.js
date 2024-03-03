import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  appFonts,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
  WP,
} from '../../utilities';
import {PhotosCard} from './PhotoCard';

export const PageProfileCard = ({title, sub1, sub2}) => {
  return (
    <View style={[styles.nameCard]}>
      <View style={commonstyles.aiRow}>
        <PhotosCard
          height={40}
          width={40}
          imageUri={appImages.s1}
          borderRadius={40}
        />
        <View style={spacing.ml3}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sub1}>{sub1}</Text>
        </View>
      </View>
      <View style={styles.descBox}>
        <Text style={styles.sub2}>{sub2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: size.large,
    fontFamily: appFonts.poppinMedium,
    color: colors.b1,
  },
  nameCard: {
    flexDirection: 'row',
    marginVertical: WP('5'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descBox: {
    flexDirection: 'row',
  },
  sub1: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.g1,
    marginTop: 1,
  },
  sub2: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.theme_color,
  },
});
