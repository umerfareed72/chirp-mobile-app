import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme_color,
  },
  text: {
    fontSize: 55,
    color: 'white',
    fontWeight: 'bold',
  },

  image: {
    height: 55,
    width: 140,
    resizeMode: 'contain',
  },
  imageStyles: {
    // resizeMode: 'stretch',
    flex: 1,
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
