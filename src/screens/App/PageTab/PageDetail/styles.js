import {StyleSheet} from 'react-native';
import {appFonts, colors, size} from '../../../../utilities';
// import {appFonts, colors, size} from '../../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {},
  itemCon: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
  },
  editIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.w1,
  },
  editIcon1: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
    tintColor: colors.w1,
  },

  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
    marginTop: 15,
  },
});

export default styles;
