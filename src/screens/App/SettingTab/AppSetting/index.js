import React from 'react';
import {Alert, FlatList, Image, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppHeader, AuthField} from '../../../../components';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  size,
  spacing,
} from '../../../../utilities';

import styles from './styles';

const AppSetting = ({navigation}) => {
  //Redux States
  const dispatch = useDispatch(null);

  //On Logout Hanlder
  const onLogout = async () => {
    navigation?.replace('Auth');
  };

  const deleteUser = () => {
    Alert.alert(
      'Delete Your Account',
      'Do you want to delete your account on Chirp?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            navigation?.replace('Auth');
          },
        },
      ],
    );
  };
  //Profile Card List
  const data = [
    {
      title: 'Edit Profile',
      icon: appIcons.userIcon,
      style: styles.faqsImageStyle,
      onPress: () => {
        navigation?.navigate('ProfileStack', {
          screen: 'EditProfile',
        });
      },
    },
    {
      title: 'Notification Settings',
      icon: appIcons.bellIcon,
      style: styles.policyImageStyle,
      onPress: () => {
        navigation?.navigate('NotificationSetting', {
          screen: 'NotificationSound',
        });
      },
    },
    {
      title: 'Privacy & Cookies Policy',
      icon: appIcons.security,
      style: styles.policyImageStyle,
      onPress: () => {
        navigation?.navigate('PrivacyPolicy');
      },
    },
    {
      title: 'Terms',
      icon: appIcons.policy,
      style: styles.TermsImageStyle,
      onPress: () => {
        navigation?.navigate('Terms');
      },
    },

    {
      title: 'Deactivate Account',
      icon: appIcons.deleteAccount,
      style: styles.faqsImageStyle,
      onPress: () => {
        deleteUser();
      },
    },
    {
      title: 'Logout',
      icon: appIcons.logout,
      style: styles.logoutImageStyle,
      onPress: () => {
        onLogout();
      },
    },
  ];

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Setting'} />
      <View style={commonstyles.contentContainer(colors.g6)}>
        <View style={styles.itemContainer}>
          <View style={styles.section2}>
            <View style={styles.imgCon}>
              <Image source={appImages.profileImage} style={styles.imgStyle} />
            </View>
            <AuthField title={'Test User'} />
          </View>
        </View>
        <View style={spacing.py4}>
          <AuthField title={'Account'} />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={item?.onPress}
                style={styles.imageConatiner}>
                <View style={styles.leftCon}>
                  <Image style={item?.style} source={item?.icon} />
                </View>
                <View style={[spacing.my3]}>
                  <AuthField
                    fontSize={size.xsmall}
                    fontFamily={appFonts.poppinRegular}
                    title={item?.title}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AppSetting;
