import React from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {AppButton, AppHeader, PhotosCard} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const Clips = ({navigation, route}) => {
  return (
    <View style={commonstyles.main}>
      <View style={styles.contentContainer}></View>
    </View>
  );
};

export default Clips;
