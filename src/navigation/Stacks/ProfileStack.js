import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import EditProfile from '../../screens/App/ProfileTab/EditProfile';
import Profile from '../../screens/App/ProfileTab/Profile';
import StoriesStack from './StoriesStack';

const Stack = createNativeStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="StoriesStack" component={StoriesStack} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
