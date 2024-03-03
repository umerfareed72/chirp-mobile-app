import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appFonts, colors, size} from '../../utilities';

export const SwitchCard = ({onPress, selected, setSelected}) => {
  return (
    <View onPress={onPress} style={styles.aiRow}>
      <TouchableOpacity
        onPress={() => setSelected('Friends')}
        style={[
          styles.btnCon,
          {
            backgroundColor:
              selected == 'Friends' ? colors.theme_color : 'transparent',
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {
              color: selected == 'Friends' ? colors.w1 : colors.theme_color,
            },
          ]}>
          Friends
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected('Groups')}
        style={[
          styles.btnCon,
          {
            backgroundColor:
              selected == 'Friends' ? 'transparent' : colors.theme_color,
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {color: selected == 'Friends' ? colors.theme_color : colors.w1},
          ]}>
          Groups
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  aiRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'transparent',
    height: 50,
    backgroundColor: colors.red1,
  },
  btnCon: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    borderRadius: 50,
  },
  btnText: {
    color: colors.black,
    fontSize: size.xsmall,
    fontFamily: appFonts.poppinMedium,
  },

  contre: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
