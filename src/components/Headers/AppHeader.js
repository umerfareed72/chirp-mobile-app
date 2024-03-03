import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MyStatusBar} from '../../components';
import {appFonts, appIcons, colors, size, WP} from '../../utilities';

export const AppHeader = ({
  onPressBack,
  text,
  title,
  rightIcon,
  onPressRightIcon,
  rightButtonText,
  rightButtonColor,
  rightIconImage,
  fontSize,
  disableRightButton = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.w1} />

      <View style={[styles.contentContainer]}>
        <View style={[styles.headerStyle]}>
          <TouchableOpacity
            onPress={onPressBack ? onPressBack : () => navigation.goBack()}>
            <Image
              source={appIcons.backArrowIcon}
              style={[styles.backIcon, {tintColor: colors.theme_color}]}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.titleStyle]}>{title}</Text>

        <View>
          {rightButtonText && (
            <View style={styles.rightIcon}>
              <TouchableOpacity
                disabled={disableRightButton}
                style={styles.rightButton}
                onPress={onPressRightIcon}>
                <Text
                  style={[
                    styles.rightButText,
                    {
                      color: disableRightButton
                        ? colors.g4
                        : colors.theme_color,
                      fontSize: fontSize || size.xsmall,
                    },
                  ]}>
                  {rightButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {rightIconImage && (
            <TouchableOpacity onPress={onPressRightIcon}>
              <Image style={styles.imageUri} source={rightIconImage} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.w4,
    shadowColor: colors.w5,
    shadowOpacity: 0.9,

    shadowOffset: {
      height: 2,
      width: 2,
    },
    zIndex: 99999,
  },
  contentContainer: {
    paddingVertical: WP('3'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.normal,
    color: colors.theme_color,
  },

  rightIcon: {
    // right: 2,
  },
  backText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xsmall,
    color: colors.drakBlack,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  rightButton: {
    backgroundColor: colors.g18,
    width: 75,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xsmall,
  },
  imageUri: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
});
