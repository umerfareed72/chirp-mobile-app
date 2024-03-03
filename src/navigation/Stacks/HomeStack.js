import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from '../../screens/App/HomeTab/CreatePost';
import TagFriend from '../../screens/App/HomeTab/TagFriend';
import AddLocation from '../../screens/App/HomeTab/AddLocation';
import LiveVideo from '../../screens/App/HomeTab/LiveVideo';
import StoriesStack from './StoriesStack';
import ClipStack from './ClipStack';
import PageStack from './PageStack';
import HomeScreen from '../../screens/App/HomeTab/HomeScreen';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="TagFriend" component={TagFriend} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="LiveVideo" component={LiveVideo} />
      <Stack.Screen name="Stories" component={StoriesStack} />
      <Stack.Screen name="Clip" component={ClipStack} />
      <Stack.Screen name="Pages" component={PageStack} />
      <Stack.Screen name="HomeProfile" component={ProfileStack} />
    </Stack.Navigator>
  );
}

export default HomeStack;
