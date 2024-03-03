import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Stories from '../../screens/App/Stories/Stories';
import CreateStory from '../../screens/App/Stories/CreateStory';
import CreateMusicStory from '../../screens/App/Stories/CreateMusicStory';

const Stack = createNativeStackNavigator();

function StoriesStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Stories"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="CreateStory" component={CreateStory} />
      <Stack.Screen name="CreateMusicStory" component={CreateMusicStory} />
    </Stack.Navigator>
  );
}

export default StoriesStack;
