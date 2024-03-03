import React, {useState, useEffect} from 'react';
import {Alert, FlatList, View} from 'react-native';
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

const InviteFriend = ({navigation, route}) => {
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
        title={'Invite Friends'}
        backIcon
        rightButtonText={'Invite'}
        rightButtonColor={colors.theme_color}
        onPressRightIcon={() => {
          Alert.alert('Success', 'Invitation Sent', [
            {text: 'OK', onPress: () => navigation?.navigate('GroupDetails')},
          ]);
        }}
        disableRightButton={false}
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

export default InviteFriend;
