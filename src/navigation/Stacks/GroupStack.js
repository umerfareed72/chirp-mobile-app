import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CoverPhoto from '../../screens/App/GroupTab/CoverPhoto';
import CreateNewGroup from '../../screens/App/GroupTab/CreateGroup';
import Description from '../../screens/App/GroupTab/Description';
import Group from '../../screens/App/GroupTab/Group';
import GroupDetails from '../../screens/App/GroupTab/GroupDetails';
import InviteFriend from '../../screens/App/GroupTab/InviteFriend';
import FriendStack from './FriendStack';
import PostStack from './PostStack';

const Stack = createNativeStackNavigator();

function GroupStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Group"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Group" component={Group} />
      <Stack.Screen name="GroupDetails" component={GroupDetails} />
      <Stack.Screen name="CreateGroup" component={CreateNewGroup} />
      <Stack.Screen name="InviteFriend" component={InviteFriend} />
      <Stack.Screen name="GroupDescription" component={Description} />
      <Stack.Screen name="GroupCoverPhoto" component={CoverPhoto} />
      {/* <Stack.Screen name="FriendStack" component={FriendStack} /> */}
      <Stack.Screen name="GroupPost" component={PostStack} />
    </Stack.Navigator>
  );
}

export default GroupStack;
