import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AddFriend from '../../screens/App/FriendTab/AddFriend';
import Friend from '../../screens/App/FriendTab/Friend';
import FriendDetails from '../../screens/App/FriendTab/FriendDetails';

const Stack = createNativeStackNavigator();

function FriendStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Friend"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="FriendDetails" component={FriendDetails} />
      <Stack.Screen name="AddFriend" component={AddFriend} />
    </Stack.Navigator>
  );
}

export default FriendStack;
