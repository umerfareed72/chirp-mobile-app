import React, {useEffect} from 'react';
import {Image, ImageBackground, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {appIcons, appImages} from '../../utilities';

import {
  Notification_Listner,
  requestPermission,
} from '../../utilities/ServiceHandler';
import styles from './styles';

const Splash = ({navigation}) => {
  const dispatch = useDispatch(null);

  const {userInfo} = useSelector(state => state?.auth);

  useEffect(() => {
    handleAppEntry();
    handlerNotifications();
  }, []);

  const handleAppEntry = async () => {
    try {
      setTimeout(() => {
        if (userInfo) {
          navigation?.replace('App');
        } else {
          navigation?.replace('Auth');
          // navigation?.replace('App');
        }
      }, 1000);
    } catch (error) {}
  };

  const handlerNotifications = () => {
    //Request Permissions and get Token
    requestPermission();
    Notification_Listner(dispatch, navigation);
  };

  return (
    <ImageBackground source={appImages.splash} style={styles.imageStyles}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />

      <Image style={styles.image} source={appIcons.splashIcon} />
    </ImageBackground>
  );
};

export default Splash;
