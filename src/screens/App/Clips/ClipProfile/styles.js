import {StyleSheet} from 'react-native';
import {appFonts, colors, size, HP, WP} from '../../../../utilities';

const styles = StyleSheet.create({
  mainSection: {alignItems: 'center', marginTop: HP('3')},
  imageUri: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  valueMain: {
    flexDirection: 'row',
    marginVertical: 20,
    width: WP('45%'),
    justifyContent: 'space-between',
    marginLeft: WP(5),
  },

  valueText: {
    fontSize: size.h5,
    color: colors.b1,
    fontFamily: appFonts.poppinBold,

    width: 100,
  },

  titleText: {
    fontSize: size.large,
    color: colors.theme_color,
    fontFamily: appFonts.poppinRegular,
  },
  floatingButton: {position: 'absolute', bottom: 10, right: 10},
  floatingButtonImage: {width: 60, height: 60, borderRadius: 30},
});

export default styles;
