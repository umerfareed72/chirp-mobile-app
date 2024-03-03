import React from 'react';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {PhotosCard} from '../../components';
import {appFonts, colors, size, spacing, WP} from '../../utilities';

import Icon from 'react-native-vector-icons/FontAwesome';

import {AppHeader} from '../Headers/AppHeader';

export const PictureModal = ({
  show,
  onPressHide,
  value,
  onChangeValue,
  url,
  bgColor,
  textColor = colors.g1,
  isVideo,
  title,
  data,
  onPressRemove,
}) => {
  return (
    <Modal
      coverScreen={true}
      backdropColor={colors.w1}
      backdropOpacity={1}
      onRequestClose={onPressHide}
      visible={show}>
      <AppHeader onPressBack={onPressHide} title={title} />

      <View>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={[spacing.m2, {marginHorizontal: 10}]}>
                <PhotosCard
                  height={200}
                  width={WP('43')}
                  borderRadius={10}
                  imageUri={item?.path}
                />

                <TouchableOpacity
                  onPress={() => onPressRemove(index, item)}
                  style={styles.crossIcon}>
                  <Icon
                    name={'close'}
                    size={10}
                    color={colors.g7}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: size.title,
    color: colors.w1,
    fontFamily: appFonts.poppinRegular,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  crossIcon: {
    height: 15,
    width: 15,
    borderRadius: 13,
    backgroundColor: colors.red2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -3,
    right: -2,
    zIndex: 9999,
  },
  icon: {fontSize: 15, color: 'white'},
});
