import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, HP, appIcons} from '../../utilities';
import {useSelector} from 'react-redux';

export const SearchInputFun = ({
  onChangeText,
  value,
  width,
  onPress,
  leftIcon,
  iconStyle,
}) => {
  return (
    <View style={[styles.searchBar, {width: width}]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={iconStyle || styles.imageUri}
          source={leftIcon || appIcons.searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        editable={true}
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor={colors.g3}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
export const SearchInput = React.memo(SearchInputFun);
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: colors.g19,
    flexDirection: 'row',
    borderRadius: 10,
    height: HP('6'),
    alignItems: 'center',
    marginVertical: 15,
  },
  searchIcon: {
    alignSelf: 'center',
    left: 12,
  },
  searchInput: {
    marginLeft: 15,
    backgroundColor: 'transparent',
    width: '85%',
    color: colors.black,
  },
  iconContainer: {
    activeOpacity: 0.7,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    width: HP('5'),
    height: HP('5'),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    alignSelf: 'center',
  },
  imageUri: {
    width: 18,
    height: 18,
    // borderRadius: 20,
    marginLeft: 10,
  },
});
