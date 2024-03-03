import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {BottomSheetCard} from '../Cards/BottomSheetCard';
import {appIcons, WP, colors} from '../../utilities';

import Icon from 'react-native-vector-icons/FontAwesome';

export const BottomSheetModal = ({
  data,
  show,
  showModalList = true,
  onPressIcon,
}) => {
  return (
    <>
      {show && (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <TouchableOpacity onPress={onPressIcon}>
              {showModalList ? (
                <Image
                  style={styles.imageUri}
                  source={appIcons.bottomCurveIcon}
                />
              ) : (
                <Icon
                  name={'chevron-up'}
                  size={15}
                  color={colors.b6}
                  style={styles.iconStyle}
                />
                // <Image style={styles.imageUri} source={appIcons.userPadIcon} />
              )}
            </TouchableOpacity>
            {showModalList && (
              <FlatList
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <BottomSheetCard
                      imageUri={item?.icon}
                      title={item?.title}
                      onPress={() => {
                        item?.onPress();
                      }}
                    />
                  );
                }}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('4'),
    backgroundColor: colors.w4,
    // position: 'absolute',
    // bottom: 0,
  },
  imageUri: {
    height: 7,
    width: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  iconStyle: {alignSelf: 'center'},
});
