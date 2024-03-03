import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  HP,
  size,
  WP,
} from '../../utilities';
import {AppCheckbox} from '../Box/AppCheckBox';

export const SlideButtonCard = ({data, activeTab, setActiveTab}) => {
  const renderBox = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveTab(item?.text)}
        style={[
          styles.btnCon,
          {
            backgroundColor:
              activeTab === item?.text ? colors.red1 : 'transparent',
          },
        ]}>
        <Text
          style={[
            styles.btnText,
            {
              color: activeTab === item?.text ? colors.theme_color : colors.b1,
            },
          ]}>
          {item?.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainCon}>
      <FlatList
        data={data}
        renderItem={renderBox}
        horizontal={true}
        keyExtractor={(item, index) => index?.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    marginVertical: 2,
    alignItems: 'center',
  },
  btnCon: {
    padding: 3,
    paddingHorizontal: 20,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btnText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxsmall,
  },
});
