import React from 'react';
import {ScrollView, Text, View, Alert, FlatList} from 'react-native';
import {HomeHeader, ScreenHeader, SettingsCard} from '../../../../components';
import PostProfileCard from '../../../../components/Cards/PostProfileCard';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  spacing,
} from '../../../../utilities';
import styles from './styles';

const Settings = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader
        onPrSearchIco={() => {
          navigation?.navigate('Search');
        }}
        onPrMessageIco={() => {
          Alert.alert('Coming Soon');
        }}
        onPressNotiIcon={() => {
          navigation?.navigate('Notification');
        }}
      />
      <ScrollView style={commonstyles.contentContainer(colors.g18)}>
        <ScreenHeader textColor={colors.theme_color} title={'Menu'} />
        <PostProfileCard
          onPress={() => navigation.navigate('ProfileStack')}
          h1={'Victoria Malik'}
          h2={'See your profile'}
          icon={appImages.profileImage}
        />
        <Text style={styles.subText}>My Pages</Text>
        <View style={spacing.my2}>
          <PostProfileCard
            h1={'Victoria Malik'}
            h2={'See your profile'}
            icon={appImages.s4}
          />
        </View>
        <View style={spacing.my2}>
          <PostProfileCard
            h1={'Victoria Malik'}
            h2={'See your profile'}
            icon={appImages.s3}
          />
        </View>
        <Text style={styles.subText}>My Groups</Text>
        <View style={spacing.my2}>
          <PostProfileCard
            h1={'Victoria Malik'}
            h2={'See your profile'}
            icon={appImages.s1}
          />
        </View>
        <View style={spacing.my2}>
          <PostProfileCard
            h1={'Victoria Malik'}
            h2={'See your profile'}
            icon={appImages.s2}
          />
        </View>
        <View style={[commonstyles.aiRow, spacing.my2]}>
          <SettingsCard
            onPress={() => {
              navigation?.navigate('Group');
            }}
            cardText={'Groups'}
            src={appIcons.tabThirdColorIcon}
          />
          <SettingsCard
            onPress={() => {
              navigation?.navigate('Page');
            }}
            cardText={'Pages'}
            src={appIcons.tabFourthColorIcon}
          />
        </View>
        <View style={[commonstyles.aiRow, spacing.my2]}>
          <SettingsCard
            cardText={'Clips'}
            src={appIcons.clipIcon}
            onPress={() => {
              navigation?.navigate('SettingClip', {
                screen: 'ClipProfile',
              });
            }}
          />
          <SettingsCard
            onPress={() => {
              navigation?.navigate('Group');
            }}
            cardText={'Friends'}
            src={appIcons.tabSevenColorIcon}
          />
        </View>

        <View style={[commonstyles.aiRow, spacing.my2]}>
          <SettingsCard
            cardText={'Settings'}
            src={appIcons.settingIcon}
            onPress={() => {
              navigation?.navigate('AppSetting');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
