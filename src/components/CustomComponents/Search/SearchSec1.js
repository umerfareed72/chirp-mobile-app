import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {appIcons, colors, WP} from '../../../utilities';
import {SearchInput} from '../../Inputs/SearchInput';
import {useNavigation} from '@react-navigation/native';
import {MyStatusBar} from '../../Bar/MyStatusBar';

export const SearchSec1 = ({onPressBack, onChangeText, value}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <MyStatusBar backgroundColor={colors.g6} />
      <View style={[styles.contentContainer]}>
        <SearchInput
          onChangeText={onChangeText}
          value={value}
          iconStyle={styles.backIcon}
          leftIcon={appIcons.backArrowIcon}
          onPress={() => {
            if (onPressBack) {
              onPressBack();
            } else {
              navigation?.goBack();
            }
          }}
        />
      </View>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.g6,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  contentContainer: {
    paddingVertical: WP('1'),
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: colors.g5,
    marginTop: 5,
  },
});
