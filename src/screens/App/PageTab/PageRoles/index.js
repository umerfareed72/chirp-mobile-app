import React, {useState} from 'react';
import {View} from 'react-native';
import {
  AppHeader,
  ListCard,
  ScreenHeader,
  SearchInput,
} from '../../../../components';
import {appImages, colors, commonstyles} from '../../../../utilities';

const PageRoles = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Page Roles'}
        backIcon
        rightButtonText={'Invite'}
        rightButtonColor={colors.red2}
      />
      <View
        style={[
          commonstyles.contentContainer(colors.w3),
          commonstyles.addPadding,
        ]}>
        <SearchInput
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <ScreenHeader title={'Searched'} marginBottom={20} />

        <ListCard
          imageUri={appImages.profileImage}
          title={'Victoria Malik'}
          isAvailableMenu
          menu_list={[
            {id: '0', title: 'Admin'},
            {id: '1', title: 'Moderate'},
          ]}
          onSelectMenu={() => {}}
        />

        <ScreenHeader title={'Role Assigned'} marginBottom={20} />

        <ListCard
          imageUri={appImages.profileImage}
          title={'Victoria Malik'}
          buttonText={'Admin'}
          buttonWidth={'25%'}
          showHorizontalLine
        />

        <ListCard
          imageUri={appImages.profileImage}
          title={'Victoria Malik'}
          buttonText={'Moderator'}
          buttonWidth={'25%'}
          showHorizontalLine
        />
      </View>
    </View>
  );
};

export default PageRoles;
