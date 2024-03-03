import React from 'react';
import {FlatList} from 'react-native';
import {ScrollView, View, Alert} from 'react-native';
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

const Pages = ({navigation}) => {
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
        <ScreenHeader
          title={'All Pages'}
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
                  h1={'Page Name'}
                  h2={'Private Page'}
                  imgHeight={WP('18')}
                  imgWidth={WP('25')}
                  imgRadius={20}
                  icon={item?.name}
                  onPress={() => navigation.navigate('PageDetail')}
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

export default Pages;
