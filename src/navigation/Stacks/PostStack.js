import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePost from '../../screens/App/HomeTab/CreatePost';
import TagFriend from '../../screens/App/HomeTab/TagFriend';
import AddLocation from '../../screens/App/HomeTab/AddLocation';
import LiveVideo from '../../screens/App/HomeTab/LiveVideo';

const Stack = createNativeStackNavigator();

function PostStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="CreatePost"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="TagFriend" component={TagFriend} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="LiveVideo" component={LiveVideo} />
    </Stack.Navigator>
  );
}

export default PostStack;
