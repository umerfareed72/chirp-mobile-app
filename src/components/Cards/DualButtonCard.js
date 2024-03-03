import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appFonts, appIcons, colors, HP, size, WP} from '../../utilities';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const DualButtonCard = ({
  buttonHeight,
  borderRadius,
  secondText,
  firstText,
  src1,
  src2,
  buttonWidth,
  iconHeight,
  iconWidth,
  btnTS,
  btnT,
  mV,
  vectIcoColor,
  vectIcoName,
  onPress1,
  onPress2,
}) => {
  return (
    <View style={[styles.outerCon, {marginVertical: mV}]}>
      <TouchableOpacity
        onPress={onPress1}
        style={[
          styles.button,
          {
            height: buttonHeight || 35,
            borderRadius: borderRadius || 8,
            width: buttonWidth || '47%',
          },
        ]}>
        {vectIcoName ? (
          <FontAwesome5
            name={vectIcoName}
            color={vectIcoColor}
            size={17}
            style={styles.iconStyle}
          />
        ) : (
          <Image
            source={src1}
            style={[
              styles.iconStyle,
              {height: iconHeight || 17, width: iconWidth || 17},
            ]}
          />
        )}

        <Text
          style={
            (styles.btnText,
            {
              color: colors.theme_color,
              fontFamily: btnT || appFonts.poppinRegular,
              fontSize: btnTS || size.tiny,
            })
          }>
          {firstText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress2}
        style={[
          styles.button,
          {
            height: buttonHeight || 35,
            borderRadius: borderRadius || 8,
            width: buttonWidth || '47%',
            backgroundColor: colors.theme_color,
          },
        ]}>
        <Image
          source={src2}
          style={[
            styles.iconStyle,
            {height: iconHeight || 17, width: iconWidth || 17},
          ]}
        />
        <Text
          style={
            (styles.btnText,
            {
              color: colors.w1,
              fontFamily: btnT || appFonts.poppinRegular,
              fontSize: btnTS || size.tiny,
            })
          }>
          {secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    borderColor: colors.theme_color,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    marginHorizontal: 5,
  },
  iconStyle: {
    marginRight: 10,

    resizeMode: 'contain',
  },
});
