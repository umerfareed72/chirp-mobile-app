import React from 'react';
import {Alert, FlatList, ScrollView, View} from 'react-native';
import {HomeHeader, ScreenHeader, SearchInput} from '../../../../components';
import PostProfileCard from '../../../../components/Cards/PostProfileCard';
import {
  appImages,
  colors,
  commonstyles,
  groupList,
  imgList,
  recentGroup,
  spacing,
  WP,
} from '../../../../utilities';

const Group = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader
        onPrSearchIco={() => {
          navigation?.navigate('Search', {
            list: groupList,
            recentList: recentGroup,
          });
        }}
        onPrMessageIco={() => {
          Alert.alert('Coming Soon');
        }}
      />
      <ScrollView style={commonstyles.contentContainer(colors.g6)}>
        <SearchInput />

        {/* For Groups */}

        <ScreenHeader
          title={'All Groups'}
          onPressIcon={() => {
            navigation?.navigate('CreateGroup');
          }}
          addIcon={true}
        />
        <FlatList
          data={imgList}
          renderItem={({item, index}) => {
            return (
              <View style={spacing.my2}>
                <PostProfileCard
                  h1={'Group Name'}
                  h2={'Private Group'}
                  imgHeight={WP('18')}
                  imgWidth={WP('25')}
                  imgRadius={20}
                  icon={item?.name}
                  onPress={() => navigation.navigate('GroupDetails')}
                  mainMarginV={10}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => item?.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default Group;
