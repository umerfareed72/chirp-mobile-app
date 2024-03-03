import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  HP,
  size,
  WP,
} from '../../utilities';
import {AppCheckbox} from '../Box/AppCheckBox';

export const ProCard = ({icon, title, desc}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <View style={styles.innerCon}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{desc}</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={appIcons.doubleTickIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  image: {
    borderRadius: 50,
    height: 42,
    width: 42,
    alignSelf: 'center',
    marginVertical: 5,
  },
  innerCon: {
    flexDirection: 'column',
    marginLeft: 7,
    justifyContent: 'center',
  },
  title: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xsmall,
    color: colors.b1,
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
  icon: {width: 15, height: 15},
  buttonText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xtiny,
    color: colors.w1,
    marginLeft: 1,
  },
});
