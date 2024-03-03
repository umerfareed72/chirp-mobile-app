import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  imageStyles: {
    backgroundColor: colors.w1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('4'),
  },
  firstCon: {
    backgroundColor: colors.w1,
    padding: WP('4'),
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 20,
    borderBottomColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
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

  btnCon: {
    width: '100%',
    marginVertical: 20,
  },
  leftCon: {
    width: '47%',
  },
  con: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerStyle: {
    fontSize: size.tiny,
    color: colors.b3,
    textAlign: 'center',
    lineHeight: 17,
    fontFamily: appFonts.InterRegular,
  },
});

export default styles;
