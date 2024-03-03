import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {
  colors,
  HP,
  appIcons,
  appImages,
  WP,
  size,
  appFonts,
} from '../../utilities';
import {AppInput} from '../Inputs/AppInput';

export const ChangeBackgroundCard = ({
  show,
  newList,
  moreList,
  onChangeValue,
  onPress,
  icon,
}) => {
  return (
    <>
      {show && (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View style={styles.main}>
            <View
              style={[
                styles.horizontalLine,
                {marginHorizontal: -20, marginTop: 2},
              ]}
            />
            <View style={styles.titleMain}>
              <Text style={styles.titleText}>Choose background</Text>
              {icon && (
                <TouchableOpacity onPress={onPress}>
                  <Image style={styles.imageUri} source={appIcons.closeIcon} />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.horizontalLine} />

            <Text style={styles.boldText}>New</Text>

            <FlatList
              data={newList}
              horizontal={true}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => onChangeValue(item)}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: item?.bgColor,
                      marginRight: 10,
                      borderRadius: 8,
                    }}></View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />

            <Text style={[styles.boldText, {marginTop: 30}]}>More</Text>
            <FlatList
              data={moreList}
              horizontal={true}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => onChangeValue(item)}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: item?.bgColor,
                      marginRight: 10,
                      borderRadius: 8,
                    }}></View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: WP(4),
    marginBottom: 20,
    backgroundColor: colors.w1,
  },
  titleMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontSize: size.small,
    color: colors.b1,
    fontFamily: appFonts.poppinMedium,
    // fontWeight: 700,
  },

  boldText: {
    fontSize: size.xxlarge,
    color: colors.b1,
    fontFamily: appFonts.poppinSemiBold,
    marginTop: 10,
    marginBottom: 5,
  },
  horizontalLine: {
    borderBottomColor: colors.g1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageUri: {
    width: 12,
    height: 12,
    tintColor: colors.g1,
    resizeMode: 'contain',
  },
});
