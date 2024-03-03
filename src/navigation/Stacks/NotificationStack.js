import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Notification from '../../screens/App/NotificationTab/Notification';
import NotificationSound from '../../screens/App/NotificationTab/NotificationSound/NotificationSound';

const Stack = createNativeStackNavigator();

function NotificationStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NotificationSound" component={NotificationSound} />
    </Stack.Navigator>
  );
}

export default NotificationStack;
