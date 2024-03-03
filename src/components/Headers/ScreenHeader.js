import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {appFonts, appIcons, colors, size, spacing} from '../../utilities';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ScreenHeader = ({
  title,
  onPressIcon,
  textColor,
  marginBottom,
  marginTop,
  fontSize,
  addIcon,
}) => {
  return (
    <View
      style={[
        styles.screenTitle,
        {marginTop: marginTop || 15, marginBottom: marginBottom || 10},
      ]}>
      <Text
        style={[
          styles.scrTitleText,
          {color: textColor || colors.b1, fontSize: fontSize || size.normal},
        ]}>
        {title || ''}
      </Text>
      {addIcon ? (
        <TouchableOpacity onPress={onPressIcon} style={[styles.btnStyle]}>
          <Image source={appIcons.plus} style={styles.iconStyle} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    alignItems: 'center',
  },
  scrTitleText: {
    marginBottom: 1,
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.normal,
  },
  iconContainer: {
    backgroundColor: colors.theme_color,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  iconStyle: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  btnStyle: {
    backgroundColor: colors.w3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: colors.w3,
  },
});
