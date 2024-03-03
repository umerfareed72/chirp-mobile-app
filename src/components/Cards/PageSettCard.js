import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appFonts, appIcons, colors, size} from '../../utilities';

export const PageSettCard = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.distantCon}>
          <View style={styles.image}>
            <Image source={icon} style={styles.icon} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.arrowCon}>
          <Text style={styles.status}>On</Text>
          <Image
            source={appIcons.rightArrowIcon}
            style={{tintColor: colors.g14, height: 12, width: 12}}
          />
        </View>
      </View>
      <View style={styles.lineStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 50,
    height: 30,
    width: 30,
    // alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: colors.theme_color,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCon: {
    flexDirection: 'row',
    marginLeft: 7,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  title: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xsmall,
    color: colors.b1,
    marginLeft: 10,
  },
  subTitle: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxtiny,
    color: colors.g1,
  },
  button: {
    width: 80,
    height: 20,
    backgroundColor: colors.theme_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {width: 16, height: 15, resizeMode: 'contain'},
  buttonText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xtiny,
    color: colors.w1,
    marginLeft: 1,
  },
  distantCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: colors.g5,
    marginTop: 5,
  },
  arrowCon: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  status: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.medium,
    color: colors.g4,
    marginRight: 10,
  },
});
