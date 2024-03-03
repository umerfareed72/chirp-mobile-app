import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {appFonts, colors, HP, size} from '../../utilities';

export const AddressInput = ({
  mapRef,
  renderRightButton,
  renderLeftButton,
  placeholder,
  onChangeText,
  value,
  height,
  top,
  width,
}) => {
  return (
    <View style={[styles.searchBar, {width: width}]}>
      <GooglePlacesAutocomplete
        renderLeftButton={renderLeftButton}
        renderRightButton={renderRightButton}
        ref={mapRef}
        placeholder={placeholder || 'Search by location'}
        styles={styles.googleInput(height, top)}
        onPress={(data, details = null) => {
          onChangeText(data?.description);
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        returnKeyType={'search'}
        query={{
          key: 'AIzaSyCNsXhqDm5RXLlLvB53UOJLXfw_bu34Uso',
          language: 'en',
        }}
        textInputProps={{
          onChangeText: onChangeText,
          value: value,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  googleInput: (height, top) => {
    return {
      container: {
        flex: 0,
        width: '100%',
      },
      textInput: {
        backgroundColor: colors.g19,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
      },
    };
  },
  searchBar: {
    backgroundColor: colors.g19,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
});
