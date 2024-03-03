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
    paddingHorizontal: WP('4'),
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
  iconStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  h1: {
    marginTop: 10,
    fontFamily: appFonts.InterRegular,
    fontSize: size.normal,
    color: colors.b4,
  },
  h2: {
    marginVertical: 5,
    fontFamily: appFonts.InterRegular,
    fontSize: size.tiny,
    color: colors.g11,
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftCon: {
    width: '15%',
    backgroundColor: 'res',
  },
  rightCon: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputCon: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: colors.g5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  inputStyle: {
    marginVertical: 10,
  },
  textStyle: {
    fontSize: size.large,
    textAlign: 'center',
    lineHeight: 26,
    color: colors.b1,
    fontFamily: appFonts.InterMedium,
    paddingHorizontal: 20,
  },
  otpInputBox: {},
  cell: {
    height: 50,
    width: 53,
    borderRadius: 12,
    borderWidth: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  txtStyle: {
    fontFamily: appFonts.InterMedium,
    fontSize: size.xxlarge,
    color: colors.bl2,
  },
  resendText: {
    fontSize: size.xsmall,
    textAlign: 'center',
    lineHeight: 26,
    color: colors.bl2,
    fontFamily: appFonts.InterRegular,
    paddingHorizontal: 20,
  },
  errorText: {
    color: colors.theme_color,
    fontSize: size.xsmall,
    marginTop: 10,
    fontFamily: appFonts.poppinRegular,
  },
  digitStyle: {
    backgroundColor: 'transparent',
    left: -12,
  },
  textRow: {
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: size.xsmall,
    color: colors.theme_color,
    fontFamily: appFonts.InterMedium,
  },
});

export default styles;
