import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {appFonts, colors, size} from '../../utilities';
import {AppCheckbox} from '../Box/AppCheckBox';

export const GroupCard = ({data, selectItem, setSelectItem, setSortBy}) => {
  const renderBox = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.innerCon}>
          <View style={styles.btnCon}>
            <Image source={item?.src} style={styles.icon} />
          </View>
          <Text style={styles.text}>{item?.title}</Text>
        </View>
        <AppCheckbox />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderBox}
        keyExtractor={(item, index) => index?.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  innerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: appFonts.poppinMedium,
    color: colors.b1,
    fontSize: size.xsmall,
    marginLeft: 10,
  },
  icon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: colors.w1,
  },
  btnCon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme_color,
    borderRadius: 20,
  },
});
