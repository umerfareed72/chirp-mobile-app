import React from 'react';
import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {AppHeader, PhotosCard} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  spacing,
  WP,
} from '../../../utilities';

const MediaItemScreen = () => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={''} />
      <View style={commonstyles.contentContainer(colors.w1)}>
        <View>
          <FlatList
            data={imgList}
            renderItem={({item}) => {
              return (
                <View style={spacing.m1}>
                  <PhotosCard
                    imageUri={item?.name}
                    height={200}
                    width={WP('43')}
                    borderRadius={10}
                  />
                </View>
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default MediaItemScreen;
