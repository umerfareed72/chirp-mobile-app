import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import MediaItemScreen from '../screens/App/MediaItemScreen';
import VideoScreen from '../screens/App/VideoScreen';

const AppStack = createNativeStackNavigator();

import Search from '../screens/App/Search';
import PrivacyPolicy from '../screens/Common/PrivacyPolicy.js';
import Terms from '../screens/Common/Terms';
import Splash from '../screens/Splash';
import BottomTab from './BottomTabs/BottomTab';
import AuthStack from './Stacks/AuthStack';

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'App'} component={BottomTab} />
        <AppStack.Screen name={'VideoScreen'} component={VideoScreen} />
        <AppStack.Screen name={'MediaItemScreen'} component={MediaItemScreen} />
        <AppStack.Screen name={'Search'} component={Search} />
        <AppStack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <AppStack.Screen name={'Terms'} component={Terms} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
