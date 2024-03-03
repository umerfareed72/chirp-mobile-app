import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  HP,
  size,
  WP,
} from '../../utilities';

export const DropDownMenu = ({
  menu_list,
  onSelect,
  width,
  padding,
  chevIcon,
  sortIcon,
  onPress,
  showIcon = true,
  marginTop,
}) => {
  return (
    <Menu>
      <MenuTrigger onPress={onPress}>
        <TouchableWithoutFeedback hitSlop={styles.hitSlop}>
          {/* <MaterialCommunityIcons
            name={'chevron-down'}
            color={colors.black}
            size={25}
            style={styles.tabIcon}
          /> */}

          {showIcon && (
            <Image style={styles.imageUri} source={appIcons.rightArrowIcon} />
          )}
        </TouchableWithoutFeedback>
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={[
          styles.conStyle,
          {
            width: width || '35%',
            padding: padding || 0,
            marginTop: marginTop || 20,
          },
        ]}>
        {menu_list?.map((item, index) => {
          return (
            <MenuOption
              key={item?.id}
              style={[
                styles.men,
                {
                  borderBottomWidth: menu_list.length - 1 > index ? 0.2 : 0,
                },
              ]}
              onSelect={() => onSelect(item)}>
              <Text style={[styles.textStyle]}>{item?.title || 'Remove'}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};
// export default React.memo(DropDownMenu);

const styles = StyleSheet.create({
  MenuContext: {
    justifyContent: 'center',

    alignItems: 'center',
    width: WP('10'),
    alignSelf: 'center',
  },
  men: {
    borderColor: colors.red2,
  },
  dotStyle: {
    height: HP('3'),
    width: WP('5'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  hitSlop: {top: 50, bottom: 50, left: 50, right: 50},
  conStyle: {
    backgroundColor: colors.g9,
    borderRadius: 5,
    paddingHorizontal: -20,
  },
  textStyle: {
    fontSize: size.tiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.theme_color,

    alignSelf: 'center',
  },

  imageUri: {
    width: 10,
    height: 15,
    tintColor: colors.g14,
  },
});
