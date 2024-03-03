import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appFonts, appIcons, colors, size} from '../../utilities';

const PostFooter = ({onPressLike, onPressComment, onPressShare}) => {
  const MyCard = ({title, icon, left, right, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.head, {left: left, right: right}]}>
        <Image source={icon} style={styles.iconStyle} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.section4}>
      <View style={styles.container}>
        <MyCard
          onPress={onPressLike}
          title={'2.1K Like'}
          icon={appIcons.likeColorIcon}
          right={20}
        />
        <MyCard
          onPress={onPressComment}
          title={'22 Comment'}
          icon={appIcons.chatDotsIcon}
        />
        <MyCard
          onPress={onPressShare}
          title={'2.1K Share'}
          icon={appIcons.shareArrowIcon}
          left={20}
        />

        <MyCard />
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  section4: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    marginRight: 25,
  },
  container: {
    flexDirection: 'row',
  },
  iconStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: colors.theme_color,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    paddingVertical: 10,
  },
  title: {
    fontSize: size.tiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.g3,
  },
});
