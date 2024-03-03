import React, {useEffect, useState} from 'react';
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

const TagFriend = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(friendList);
  }, []);

  const onSelect = index => {
    let list = [...listData];
    list[index].isTaged = !list[index].isTaged;
    setListData(list);
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Tag Friends'}
        backIcon
        rightButtonText={'Tag'}
        onPressRightIcon={() => {
          navigation?.goBack();
        }}
      />

      <View style={commonstyles.contentContainer(colors.g18)}>
        <SearchInput
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <ScreenHeader title={'All Friends'} />
        <FlatList
          data={listData}
          renderItem={({item, index}) => (
            <ListCard
              imageUri={appImages.profileImage}
              title={'Victoria Malik'}
              isSelected={item?.isTaged}
              showIcon
              onPressCheckbox={() => onSelect(index)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TagFriend;
