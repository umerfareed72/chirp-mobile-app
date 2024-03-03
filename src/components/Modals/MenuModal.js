import React, {useRef} from 'react';
import {Image} from 'react-native';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  appFonts,
  appIcons,
  colors,
  family,
  HP,
  size,
  spacing,
} from '../../utilities';

export const MenuModal = ({show, onPress, data, height}) => {
  const renderItems = ({item}) => {
    return (
      <View style={spacing.mx2}>
        <TouchableOpacity onPress={onPress} style={[styles.itemContainer]}>
          <Image
            source={item?.icon || appIcons.heartIcon}
            style={styles.imageStyle}
          />
          <View style={spacing.ml4}>
            <Text style={[styles.titleText]}>{item?.title}</Text>
            <Text style={[styles.itemText]}>{item?.subtitle}</Text>
          </View>
        </TouchableOpacity>
        <Divider />
      </View>
    );
  };
  return (
    <RBSheet
      ref={show}
      // height={329}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: colors.theme_color,
          width: 65,
          height: 3,
        },

        container: {
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          height: height || '45%',
          paddingVertical: 10,
        },
      }}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={(item, index) => item?.toString()}
        />
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },

  itemContainer: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: size.normal,
    fontFamily: appFonts.poppinRegular,
    color: colors.g13,
  },
  titleText: {
    color: colors.theme_color,
    fontSize: size.large,
    fontFamily: appFonts.poppinRegular,
  },
  imageStyle: {
    height: 33,
    width: 33,
    resizeMode: 'contain',
  },
});
