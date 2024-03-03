import React from 'react';
import {Alert, FlatList, ScrollView, View} from 'react-native';
import {
  FriendCard,
  HomeHeader,
  ScreenHeader,
  SearchInput,
} from '../../../../components';
import {
  appImages,
  colors,
  commonstyles,
  friendList,
  frSearchList,
  recentList,
  WP,
} from '../../../../utilities';

const Friend = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader
        onPrSearchIco={() => {
          navigation?.navigate('Search', {
            list: friendList,
            recentList: recentList,
          });
        }}
        onPrMessageIco={() => {
          Alert.alert('Coming Soon');
        }}
        addIcon={false}
      />
      <ScrollView style={commonstyles.contentContainer(colors.g6)}>
        <SearchInput />

        {/* For Friends */}

        <ScreenHeader
          title={'All Friends'}
          onPressIcon={() => {
            navigation.navigate('AddFriend');
          }}
          addIcon={true}
        />

        <FlatList
          data={frSearchList.slice(0, 3)?.map(item => item)}
          renderItem={({item, index}) => (
            <FriendCard
              imageUri={appImages.profileImage}
              title={item?.name}
              buttonHeight={30}
              sub1={item?.isFriend ? 'Friend' : item?.followers}
              sub2={item?.profession}
              buttonText={'Message'}
              secButtonText={'Remove'}
              secButton
              buttonWidth={'47%'}
              rightWConidth={WP('57')}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        <ScreenHeader title={'Suggested Friends'} />

        <FlatList
          data={frSearchList}
          renderItem={({item, index}) => (
            <FriendCard
              imageUri={appImages.profileImage}
              title={item?.name}
              buttonHeight={30}
              sub1={item?.followers}
              sub2={item?.profession}
              buttonText={'Add Friend'}
              rightWConidth={WP('57')}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default Friend;
