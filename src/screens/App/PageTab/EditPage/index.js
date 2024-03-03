import React, {useState} from 'react';
import {View} from 'react-native';
import {
  AppHeader,
  ScreenHeader,
  SearchInput,
  DetailCard,
} from '../../../../components';
import {colors, commonstyles, spacing} from '../../../../utilities';

const EditPage = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Edit Page'} backIcon />
      <View style={commonstyles.contentContainer(colors.w3)}>
        <View style={{marginVertical: 20}}>
          {/* <DetailCard
            title={'Page Header'}
            subTitle={`The Header Shows What Sets You Apart With a 
Photo and More.`}
            onPress={() => {}}
          /> */}

          <DetailCard
            title={'Page Info'}
            subTitle={`The Header Shows What Sets You Apart With a Photo and More.`}
            onPress={() => {
              navigation?.navigate('UpdatePageInfo');
            }}
          />

          <DetailCard
            title={'Settings'}
            subTitle={`The Header Shows What Sets You Apart With a Photo and More.`}
            onPress={() => {
              navigation?.navigate('PageSettings');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EditPage;
