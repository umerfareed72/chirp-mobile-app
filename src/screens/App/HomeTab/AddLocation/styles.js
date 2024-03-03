import {StyleSheet} from 'react-native';
import {ColorSpace} from 'react-native-reanimated';
import {appFonts, colors, HP, size, WP} from '../../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP(5),
  },
  imageUri: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  smallText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.tiny,
    textAlign: 'center',
    width: WP('80%'),
    color: colors.g10,
    marginVertical: 10,
  },
});

export default styles;
