import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  image: {
    height: 32,
    width: 80,
    resizeMode: 'contain',
    tintColor: colors.w1,
    top: 10,
    left: -15,
  },
  imageStyles: {
    backgroundColor: colors.w1,
    paddingHorizontal: WP('4'),
  },
  firstCon: {
    backgroundColor: colors.w1,
    padding: WP('4'),
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 20,
    borderBottomColor: colors.theme_color,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: WP('40'),
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },

  contentCon: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: WP('20'),
  },
  inputCon: {
    width: '100%',
  },
  forgotText: {
    fontFamily: appFonts.InterRegular,
    textAlign: 'right',
    width: '100%',
    fontSize: size.tiny,
    color: colors.theme_color,
    marginVertical: 10,
  },
  btnCon: {
    width: '100%',
    marginVertical: 20,
  },
});

export default styles;
