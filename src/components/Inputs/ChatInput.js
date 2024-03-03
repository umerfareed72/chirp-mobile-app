import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, HP, appIcons, WP, appImages} from '../../utilities';
import {useSelector} from 'react-redux';
import {ColorSpace} from 'react-native-reanimated';

export const ChatInputFun = ({onChangeText, value, width, inputWidth}) => {
  return (
    <View style={styles.main}>
      <Image style={styles.imageUri} source={appImages.profileImage} />
      <View style={[styles.searchBar, {width: width || WP('78%')}]}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          editable={true}
          style={[styles.searchInput, {width: inputWidth || '75%'}]}
          placeholder="Write a Comment"
          placeholderTextColor={colors.g4}
          autoCapitalize="none"
          autoCorrect={false}
          multiline
        />
        <Image style={styles.buttonStyle} source={appIcons.sendStraightIcon} />
      </View>
    </View>
  );
};
export const ChatInput = React.memo(ChatInputFun);
const styles = StyleSheet.create({
  main: {flexDirection: 'row', alignItems: 'center', marginLeft: 10},
  searchBar: {
    backgroundColor: colors.g7,
    flexDirection: 'row',
    borderRadius: 8,
    height: 40,
    alignItems: 'center',
    marginVertical: 15,
    width: WP('78%'),
    borderWidth: 1.5,
    borderColor: colors.theme_color,
    marginLeft: 10,
  },
  searchInput: {
    marginLeft: 10,
    backgroundColor: 'transparent',
    width: '85%',
    color: colors.black,
  },
  imageUri: {
    width: 40,
    height: 40,
    borderRadius: 25,
    // marginRight: 10,
  },

  buttonStyle: {
    width: 25,
    height: 25,
  },
});
