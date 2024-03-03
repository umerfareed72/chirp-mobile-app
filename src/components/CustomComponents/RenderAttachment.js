import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, commonstyles} from '../../utilities';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthField} from '../Fields/AuthField';

export const RenderAttachment = ({attachment, removeImage, showMore}) => {
  return (
    <FlatList
      horizontal={true}
      data={attachment}
      contentContainerStyle={{paddingBottom: 25}}
      renderItem={({item, index}) => {
        if (index < 4) {
          return (
            <TouchableOpacity
              onPress={showMore}
              disabled={index < 3 ? true : false}>
              <ImageBackground
                source={{
                  uri: item.path,
                }}
                style={styles.imagebgStyle}
                imageStyle={styles.mgStyle}>
                {index < 3 && (
                  <TouchableOpacity
                    onPress={() => removeImage(index, item)}
                    style={styles.crossIcon}>
                    <Icon
                      name={'close'}
                      size={10}
                      color={colors.g7}
                      style={styles.iconStyle}
                    />
                  </TouchableOpacity>
                )}
                {attachment?.length > 4 && index === 3 && (
                  <>
                    <View style={commonstyles.bgOverlay}></View>
                    <View
                      style={{
                        position: 'absolute',
                      }}>
                      <AuthField
                        color={colors.w1}
                        title={`+${attachment.length - 4}`}
                      />
                    </View>
                  </>
                )}
              </ImageBackground>
            </TouchableOpacity>
          );
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  imagebgStyle: {
    height: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width / 4.7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mgStyle: {
    // height: '100%',
    // width: '100%',
    borderRadius: 12,
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
