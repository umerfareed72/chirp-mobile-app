import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appFonts, colors, size, WP} from '../../utilities';

import {AppButton} from '../../components';

// import {Checkbox} from 'react-native-paper';

export const FriendCard = ({
  imageUri,
  title,
  buttonText,
  secButtonText,
  onPressButton,
  onPressSecButton,
  buttonWidth,
  buttonHeight,
  menu_list,
  isAvailableMenu,
  onSelectMenu,
  sub1,
  sub2,
  onPressImg,
  secButton,
  rightWConidth,
}) => {
  return (
    <>
      <View style={styles.imageTitleContainer}>
        <TouchableOpacity onPress={onPressImg}>
          <Image style={styles.imageUri} source={imageUri} />
        </TouchableOpacity>
        <View style={[styles.rightCon, {width: rightWConidth || WP('50')}]}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.sub1}>{sub1}</Text>
          <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.sub2}>
            {sub2}
          </Text>

          <View style={styles.buttonCon}>
            <AppButton
              width={buttonWidth || '100%'}
              height={buttonHeight || 25}
              title={buttonText}
              bgColor={colors.theme_color}
              shadowColor={colors.theme_color}
              titleColor={colors.w1}
              fontSize={14}
              borderRadius={5}
              onPress={onPressButton}
            />

            {secButton ? (
              <AppButton
                width={buttonWidth || '100%'}
                height={buttonHeight || 25}
                title={secButtonText}
                bgColor={colors.g7}
                shadowColor={colors.w1}
                titleColor={colors.b1}
                fontSize={14}
                borderRadius={5}
                onPress={onPressSecButton}
              />
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageUri: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.b1,
    // marginLeft: 15,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
  },
  imageTitleContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 15,
    // backgroundColor: colors.g5,
    padding: 10,
  },
  iconStyle: {marginRight: 10},
  horizontalLine: {
    borderBottomColor: colors.g1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rightCon: {
    // flex: 1,
    marginLeft: 10,
  },
  sub1: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.g1,
  },
  sub2: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xtiny,
    color: colors.g1,
  },
  buttonCon: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    flexDirection: 'row',
  },
});
