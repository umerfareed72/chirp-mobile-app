import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utilities';

export const CreateStoryCard = ({title, subTitle, onPress}) => {
  return <View> </View>;
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.w1,
    marginHorizontal: -20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 5,
  },
});
