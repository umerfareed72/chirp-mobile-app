import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {colors, appFonts, size, appImages, WP} from '../../utilities';
import PostProfileCard from './PostProfileCard';

export const NotificationCard = ({onPress, title, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.appButton]}>
      <PostProfileCard h1={title} icon={appImages.profileImage} h2={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: colors.theme_color,
    marginVertical: 10,
    paddingHorizontal: WP('4'),
  },
});
