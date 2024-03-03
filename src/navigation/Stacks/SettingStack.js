import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from '../../screens/App/HomeTab/CreatePost';
import TagFriend from '../../screens/App/HomeTab/TagFriend';
import Setting from '../../screens/App/SettingTab/Setting';
import ProfileStack from './ProfileStack';
import NotificationStack from './NotificationStack';
import ClipStack from './ClipStack';
import AppSetting from '../../screens/App/SettingTab/AppSetting';

const Stack = createNativeStackNavigator();

function SettingStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="NotificationSetting" component={NotificationStack} />
      <Stack.Screen name="SettingClip" component={ClipStack} />
      <Stack.Screen name="AppSetting" component={AppSetting} />
    </Stack.Navigator>
  );
}

export default SettingStack;
