import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import 'react-native-gesture-handler';

import {Image} from 'react-native';
import {appIcons, colors} from '../../utilities';
import styles from './styles';

import HomeStack from '../Stacks/HomeStack';
import PageStack from '../Stacks/PageStack';
import NotificationStack from '../Stacks/NotificationStack';
import GroupStack from '../Stacks/GroupStack';
import SettingStack from '../Stacks/SettingStack';
import FriendStack from '../Stacks/FriendStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.theme_color,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.theme_color,
        tabBarShowLabel: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabFirstColoricon}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Home');
          },
        })}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabThirdColorIcon}
              style={[styles.teamIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Group"
        component={GroupStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Group');
          },
        })}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabFourthColorIcon}
              style={[styles.pageIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Page"
        component={PageStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Pages');
          },
        })}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabSevenColorIcon}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Friend"
        component={FriendStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Friend');
          },
        })}
      />

      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabFifthColorIcon}
              style={[styles.homeIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Notification"
        component={NotificationStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Notification');
          },
        })}
      /> */}
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={appIcons.tabSixthColorIcon}
              style={[styles.settingIcon, {tintColor: color}]}
            />
          ),
        }}
        name="Setting"
        component={SettingStack}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
