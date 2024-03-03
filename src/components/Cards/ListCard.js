import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appFonts, colors, HP, size} from '../../utilities';

import {AppButton, DropDownMenu} from '../../components';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import {Checkbox} from 'react-native-paper';

export const ListCard = ({
  imageUri,
  title,
  isSelected,
  onPressCheckbox,
  buttonText,
  showIcon,
  onPressButton,
  buttonWidth,
  buttonHeight,
  showHorizontalLine,
  menu_list,
  isAvailableMenu,
  onSelectMenu,
  showCloseIcon,
  onPressCloseIco,
}) => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.imageTitleContainer}>
          <Image style={styles.imageUri} source={imageUri} />

          <Text style={styles.titleStyle}>{title}</Text>
        </View>

        {showIcon && (
          <TouchableOpacity onPress={onPressCheckbox}>
            <Icon
              name={isSelected ? 'check-square' : 'square-o'}
              size={20}
              color={colors.theme_color}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}

        {showCloseIcon && (
          <TouchableOpacity onPress={onPressCloseIco}>
            <AntDesign
              name={'close'}
              size={20}
              color={colors.theme_color}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}

        {buttonText && (
          <AppButton
            width={buttonWidth || '15%'}
            height={buttonHeight || 25}
            title={buttonText}
            bgColor={colors.theme_color}
            shadowColor={colors.theme_color}
            titleColor={colors.w1}
            fontSize={14}
            borderRadius={5}
            onPress={onPressButton}
          />
        )}

        {isAvailableMenu && (
          <DropDownMenu
            onSelect={onSelectMenu}
            width={120}
            padding={10}
            menu_list={menu_list}
          />
        )}
      </View>

      {/* {showHorizontalLine && <View style={[styles.horizontalLine]} />} */}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  imgStyle: {
    width: HP('9'),
    height: HP('9'),
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  imageUri: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.b1,
    marginLeft: 15,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {marginRight: 10},
  horizontalLine: {
    borderBottomColor: colors.g1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
