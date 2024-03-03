import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appFonts, colors, size} from '../../utilities';

export const ProfileCard = ({
  imageUri,
  title,
  subHeading,
  height,
  width,
  borderWidth,
  borderRadius,
  borderColor,
  titleFontSize,
  titleColor,
  subHeadingFontSize,
  marginTop,
  titleFontFamily = appFonts.poppinRegular,
  subHeadingFontFamily = appFonts.poppinRegular,
}) => {
  return (
    <>
      <View style={[styles.section, {marginTop: marginTop || 0}]}>
        <Image
          style={[
            styles.imageUri,
            {
              height: height || 40,
              width: width || 40,
              borderWidth: borderWidth || 0,
              borderRadius: borderRadius || 20,
              borderColor: borderColor || colors.theme_color,
            },
          ]}
          source={imageUri}
        />

        <View style={{marginLeft: 10}}>
          <Text
            style={[
              styles.titleStyle,
              {
                fontSize: titleFontSize || size.small,
                color: titleColor || colors.w1,
                fontFamily: titleFontFamily,
              },
            ]}>
            {title}
          </Text>
          {subHeading && (
            <Text
              style={[
                styles.subHeadingStyle,
                {
                  fontSize: subHeadingFontSize || size.xtiny,
                  color: titleColor || colors.w1,
                  fontFamily: subHeadingFontFamily,
                },
              ]}>
              {subHeading}
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageUri: {
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: size.small,
    color: colors.w1,
    fontFamily: appFonts.poppinRegular,
    // fontWeight: 700,
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  subHeadingStyle: {
    fontSize: size.xtiny,
    color: colors.w1,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
    marginLeft: 2,
  },
});
