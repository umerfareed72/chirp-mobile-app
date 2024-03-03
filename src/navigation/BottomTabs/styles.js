import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../utilities';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.w4,
    alignItems: 'center',
    height: Platform.select({android: 60, ios: 80}),
  },
  tabBarLabelStyle: {fontSize: 10, marginBottom: 10},
  homeIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  teamIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  pageIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  settingIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default styles;
