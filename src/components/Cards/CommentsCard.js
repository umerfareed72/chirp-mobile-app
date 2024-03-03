import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
} from '../../utilities';

export const CommentsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCon}>
        <View style={styles.imgCon}>
          <Image source={appImages.profileImage} style={styles.imgStyle} />
        </View>
      </View>
      <View style={styles.rightCon}>
        <View style={styles.cardCon}>
          <Text style={styles.h1}>Victoria Malik</Text>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Text>
        </View>
        <View style={commonstyles.row}>
          <Text style={styles.h2}>4w</Text>
          <TouchableOpacity style={[styles.head, spacing.mx2]}>
            <Text style={styles.title}>1</Text>
            <Image source={appIcons.likeColorIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  leftCon: {
    width: '15%',
  },
  rightCon: {
    width: '85%',
  },
  imgCon: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  cardCon: {
    backgroundColor: colors.g6,
    padding: 10,
    borderRadius: 10,
    shadowColor: colors.g3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  h1: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.tiny,
    color: colors.b1,
    lineHeight: 17,
    marginBottom: 5,
  },
  desc: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxtiny,
    color: colors.b1,
    lineHeight: 17,
  },
  h2: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xxtiny,
    color: colors.g3,
    lineHeight: 17,
    margin: 5,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  title: {
    fontSize: size.xxtiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.g3,
    right: 5,
  },
  iconStyle: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
});
