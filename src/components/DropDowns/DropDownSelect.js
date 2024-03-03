import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {DropDownMenu} from '../../components';

import {appFonts, appIcons, appImages, colors, size, WP} from '../../utilities';

const DropDownSelectFun = ({
  title,
  showMenu,
  values,
  onSelectMenu,
  onPress,
  menu_list,
  height,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, {height: height || 60}]}>
          <View style={styles.leftContainer}>
            <View style={{width: WP(85)}}>
              {title && <Text style={styles.titleStyle}>{title}</Text>}

              <View style={{flexWrap: 'wrap'}}>
                <FlatList
                  data={values}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.valueContainer}>
                        <Text style={styles.valueStyle}>{item}</Text>
                      </View>
                    );
                  }}
                  keyExtractor={(item, index) => index?.toString()}
                  horizontal={true}
                />
              </View>
            </View>

            <Image style={styles.imageUri} source={appIcons.bottomCurveIcon} />
          </View>
          <DropDownMenu
            onPress={onPress}
            onSelect={onSelectMenu}
            width={WP('90%')}
            menu_list={menu_list}
            showIcon={false}
            padding={0}
            marginTop={10}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
export const DropDownSelect = React.memo(DropDownSelectFun);
const styles = StyleSheet.create({
  container: {
    marginVertical: WP('2.5'),
    width: '100%',

    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.red2,
    backgroundColor: colors.w1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  titleStyle: {
    marginLeft: 10,
    fontSize: size.xsmall,
    color: colors.g17,
    marginBottom: 5,
  },

  valueContainer: {
    width: 80,
    height: 20,
    backgroundColor: colors.red1,
    borderRadius: 26,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueStyle: {
    fontSize: size.xxtiny,
    color: colors.red2,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 400,
  },
  imageUri: {width: 12, height: 7, tintColor: colors.red2},
  leftContainer: {flexDirection: 'row', alignItems: 'center', width: WP(85)},
});
