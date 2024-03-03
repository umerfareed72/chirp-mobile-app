import React from 'react';
import {View} from 'react-native';
import {AppHeader, PageSettCard} from '../../../../components';
import {appIcons, colors, commonstyles} from '../../../../utilities';
import styles from './styles';

const PageSettings = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Settings'} backIcon />
      <View style={commonstyles.contentContainer(colors.g6)}>
        {[
          {
            title: 'Page Roles',
            icon: appIcons.teamIcon,
            onPress: () => {
              navigation?.navigate('PageRoles');
            },
          },
          {
            title: 'People who like this page',
            icon: appIcons.userWhiteIcon,
            onPress: () => {
              navigation?.navigate('PeopleLikePage');
            },
          },
          {
            title: 'Notification & Sounds',
            icon: appIcons.bellWhiteIcon,
            onPress: () => {
              navigation?.navigate('Notification1', {
                screen: 'NotificationSound',
              });
            },
          },
        ].map(item => (
          <View style={styles.listCon}>
            <PageSettCard
              title={item?.title}
              icon={item?.icon}
              onPress={item?.onPress}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PageSettings;
