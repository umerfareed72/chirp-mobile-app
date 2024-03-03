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
  spacing,
} from '../../../../utilities';

const PeopleLikePage = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'People Who Like Page'} backIcon />
      <View style={commonstyles.contentContainer(colors.w2)}>
        <SearchInput
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <ScreenHeader title={'Suggested'} marginTop={0} />
        <View>
          <FlatList
            data={friendList}
            renderItem={({item, index}) => (
              <ListCard
                imageUri={appImages.profileImage}
                title={'Victoria Malik'}
                isSelected={index == 0 ? true : false}
                buttonText={'Ban'}
                // showIcon
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default PeopleLikePage;
