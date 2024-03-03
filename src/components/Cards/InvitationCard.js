import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appFonts, appIcons, appImages, colors, HP, size} from '../../utilities';
export const InvitationCard = ({profileImg = false, onPressInvite}) => {
  return (
    <View style={styles.container}>
      <Image source={appImages.n1} style={styles.imgStyle} />
      <View style={styles.textCon}>
        <Text style={styles.title}>Shahid Saeed</Text>
        <Text style={styles.subTitle}>153 mutual friends</Text>
      </View>

      <TouchableOpacity onPress={onPressInvite} style={styles.button}>
        <Text style={styles.buttonText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.g6,
    alignItems: 'center',
  },
  imgStyle: {
    height: '60%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxxtiny,
    color: colors.b1,
  },
  subTitle: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xxxxtiny,
    color: colors.b1,
  },
  textCon: {marginVertical: 10},
  button: {
    height: 20,
    width: 60,
    backgroundColor: colors.theme_color,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },

  buttonText: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xxtiny,
    color: colors.w1,
  },
});
