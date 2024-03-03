import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appFonts, colors, size, WP} from '../../utilities';

export const GroupProfileCard = ({title, sub1, sub2}) => {
  return (
    <View style={[styles.nameCard]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descBox}>
        <Text style={styles.sub1}>{sub1}</Text>
        <View style={{marginHorizontal: 3}}></View>
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
  nameCard: {flexDirection: 'column', marginVertical: WP('5')},
  descBox: {
    flexDirection: 'row',
  },
  sub1: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.g1,
  },
  sub2: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.theme_color,
  },
});
