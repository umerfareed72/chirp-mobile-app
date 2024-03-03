import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../utilities';

export const OverlapAvatarCard = ({users_lists, imageHeight, imageWidth}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {users_lists?.slice(0, 10)?.map(item => {
        return (
          <View
            style={[
              styles.smallImageCard,
              {height: imageHeight, width: imageWidth, marginRight: -10},
            ]}>
            <Image source={item?.name || ''} style={[styles.smallImageStyle]} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  smallImageCard: {borderRadius: 100},
  smallImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    resizeMode: 'cover',
    borderColor: colors.white,
  },
});
