import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  AppHeader,
  ListCard,
  ScreenHeader,
  SearchInput,
} from '../../../../components';
import {
  appImages,
  colors,
  commonstyles,
  friendList,
} from '../../../../utilities';

const MediaLibrary = ({navigation, route}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Tag Friends'}
        backIcon
        rightButtonText={'Invite'}
        rightButtonColor={colors.theme_color}
        onPressRightIcon={() => {
          navigation?.navigate('GroupCoverPhoto');
        }}
      />
      <View style={commonstyles.contentContainer(colors.w2)}>
        <SearchInput
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <ScreenHeader title={'All Friends'} />
        <FlatList
          data={friendList}
          renderItem={({item, index}) => (
            <ListCard
              imageUri={appImages.profileImage}
              title={'Victoria Malik'}
              isSelected={index == 0 ? true : false}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MediaLibrary;
