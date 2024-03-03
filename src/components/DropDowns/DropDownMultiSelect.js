import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {appIcons, colors, size, WP} from '../../utilities';

const DropDownMultipleSelectFun = ({
  items,
  value,
  open,
  setOpen,
  onPressPicker,
  setValue,
  placeholder,
  icon,
  error,
}) => {
  return (
    <>
      <View style={styles.container}>
        {icon && (
          <View style={styles.leftCon}>
            <Image source={appIcons.genderIcon} style={styles.iconStyle} />
          </View>
        )}
        <DropDownPicker
          multiple={true}
          mode={'BADGE'}
          onPress={onPressPicker}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          onSelectItem={setValue}
          placeholder={placeholder}
          containerStyle={styles.containerStyle}
          style={styles.innerStyle}
          dropDownContainerStyle={{zIndex: 9999, width: '100%'}}
          placeholderStyle={styles.textStyle}
          // dropDownDirection={'TOP'}
        />
      </View>
      {error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </>
  );
};
export const DropDownMultipleSelect = React.memo(DropDownMultipleSelectFun);
const styles = StyleSheet.create({
  container: {
    marginVertical: WP('2.5'),
    height: 52,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.g5,
  },
  leftCon: {
    width: '14%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerStyle: {
    paddingVertical: 5,
  },
  innerStyle: {
    borderWidth: 0,
    width: '100%',
    color: colors.g1,
  },
  iconStyle: {
    height: 18,
    width: 18,
    left: 5,
  },
  textStyle: {
    fontSize: size.xsmall,
    color: colors.g1,
  },
  errorStyle: {
    fontSize: size.tiny,
    color: colors.theme_color,
    padding: 5,
    marginTop: 5,
    textAlign: 'left',
  },
});
