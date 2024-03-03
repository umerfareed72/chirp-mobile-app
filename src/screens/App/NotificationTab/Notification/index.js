import React from 'react';
import {FlatList, View, Alert} from 'react-native';

import {
  HomeHeader,
  NotificationCard,
  ScreenHeader,
} from '../../../../components';
import {colors, commonstyles} from '../../../../utilities';
import styles from './styles';

const Notification = ({navigation, route}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader
        onPrMessageIco={() => {
          Alert.alert('Coming Soon');
        }}
      />
      <View style={commonstyles.contentContainer(colors.g6)}>
        <View style={styles.mainContainer}>
          {/* <SearchInput /> */}
          <ScreenHeader title={'Notifications'} />
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <View>
                  <NotificationCard
                    onPress={() => {}}
                    title={'Group created'}
                    text={'Last seen by 4 hours ago'}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;
