import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors, size, WP} from '../../utilities';
export const AppInput = ({
  multiline,
  placeholder,
  placeholderTextColor = colors.g1,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  onBlur,
  blurOnSubmit,
  disableFullscreenUI,
  autoCapitalize,
  onSubmitEditing,
  returnKeyType,
  touched,
  error,
  maxLength,
  editable,
  rightIcon,
  onPressIn,
  width,
  height,
  name,
  leftIcon,
  onPresLeftIcon,
  onPressRightIcon,
  outlineColor,
  activeColor,
  marginVertical,
  selectionColor,
  cursorColor,
}) => {
  return (
    <View
      style={[styles.container, {marginVertical: marginVertical || WP('1')}]}>
      <TextInput
        style={[
          styles.inputStyle,
          {width: width ? width : null, height: height ? height : null},
        ]}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        name={name}
        value={value}
        onBlur={onBlur}
        blurOnSubmit={blurOnSubmit}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        editable={editable}
        maxLength={maxLength}
        mode={'outlined'}
        cursorColor={cursorColor}
        outlineColor={outlineColor || colors.g5}
        activeOutlineColor={activeColor || colors.theme_color}
        theme={{roundness: 8, colors: {text: colors.w1}}}
        textColor={colors.b1}
        dense={true}
        selectionColor={selectionColor}
        onPressIn={onPressIn}
        left={
          leftIcon && (
            <TextInput.Icon onPress={onPresLeftIcon} icon={leftIcon} />
          )
        }
        right={
          rightIcon && (
            <TextInput.Icon onPress={onPressRightIcon} icon={rightIcon} />
          )
        }
      />
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: WP('1'),
  },

  inputStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    backgroundColor: colors.w1,
    justifyContent: 'center',
    paddingVertical: 5,
  },

  errorStyle: {
    fontSize: size.tiny,
    color: colors.theme_color,
    padding: 5,
    marginTop: 5,
    textAlign: 'left',
  },
});
