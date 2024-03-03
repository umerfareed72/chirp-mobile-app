import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {AppHeader, NotificationSettingCard} from '../../../../components';
import {colors, commonstyles, notificationList} from '../../../../utilities';

const NotificationSound = ({navigation, route}) => {
  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(notificationList);
  }, []);

  const onSelect = index => {
    let list = [...listData];
    list[index].isSelected = !list[index].isSelected;
    setListData(list);
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Notification & Sounds'} backIcon />
      <View style={commonstyles.contentContainer(colors.w2)}>
        <View style={{marginVertical: 20}}>
          <FlatList
            data={listData}
            renderItem={({item, index}) => (
              <NotificationSettingCard
                title={item?.name}
                selected={item?.isSelected}
                onPress={() => onSelect(index)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationSound;
