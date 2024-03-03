import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClipProfile from '../../screens/App/Clips/ClipProfile';
import CreateClip from '../../screens/App/Clips/CreateClip';
import Clips from '../../screens/App/Clips/Clips';

const Stack = createNativeStackNavigator();

function ClipStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Clips"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Clips" component={Clips} />
      <Stack.Screen name="ClipProfile" component={ClipProfile} />
      <Stack.Screen name="CreateClip" component={CreateClip} />
    </Stack.Navigator>
  );
}

export default ClipStack;
