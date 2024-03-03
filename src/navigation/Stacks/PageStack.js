import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CreatePage1 from '../../screens/App/PageTab/CreatePage1';
import CreatePage2 from '../../screens/App/PageTab/CreatePage2';
import EditPage from '../../screens/App/PageTab/EditPage';
import PageDetail from '../../screens/App/PageTab/PageDetail';
import PageRoles from '../../screens/App/PageTab/PageRoles';
import Pages from '../../screens/App/PageTab/Pages';
import PageSettings from '../../screens/App/PageTab/PageSettings';
import PageView from '../../screens/App/PageTab/PageView';
import PeopleLikePage from '../../screens/App/PageTab/PeopleLikePage';
import UpdatePageInfo from '../../screens/App/PageTab/UpdatePageInfo';
import NotificationStack from './NotificationStack';
import PostStack from './PostStack';

const Stack = createNativeStackNavigator();

function PageStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Pages"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pages" component={Pages} />
      <Stack.Screen name="PageDetail" component={PageDetail} />
      <Stack.Screen name="PageView" component={PageView} />
      <Stack.Screen name="PageRoles" component={PageRoles} />
      <Stack.Screen name="PeopleLikePage" component={PeopleLikePage} />
      <Stack.Screen name="EditPage" component={EditPage} />
      <Stack.Screen name="UpdatePageInfo" component={UpdatePageInfo} />
      <Stack.Screen name="CreatePage1" component={CreatePage1} />
      <Stack.Screen name="CreatePage2" component={CreatePage2} />
      <Stack.Screen name="PageSettings" component={PageSettings} />
      <Stack.Screen name="Notification1" component={NotificationStack} />
      <Stack.Screen name="PagePost" component={PostStack} />
    </Stack.Navigator>
  );
}

export default PageStack;
