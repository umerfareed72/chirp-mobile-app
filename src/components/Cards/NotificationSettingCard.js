import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appFonts, appIcons, colors, size} from '../../utilities';

export const NotificationSettingCard = ({title, selected, onPress}) => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.imageUri}
            source={
              selected ? appIcons.checkedRadioIcon : appIcons.uncheckedRadioIcon
            }
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 15,
  },
  imageUri: {
    width: 60,
    height: 60,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    marginLeft: 15,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
  },
});
