import {StyleSheet} from 'react-native';
import {colors, appFonts, WP, HP, size} from '../../../../utilities';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cardCon: {
    height: 120,
    width: '30%',
    backgroundColor: colors.g6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  iconStyle: (height, width) => {
    return {
      height: height || 36,
      width: width || 36,
      resizeMode: 'contain',
    };
  },
  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    top: 15,
    fontFamily: appFonts.poppinRegular,
  },
  buttonCon: {
    bottom: HP('5'),
    position: 'absolute',
    alignSelf: 'center',
  },
  regText: {
    fontFamily: appFonts.poppinRegular,
    color: colors.b1,
    fontSize: size.xsmall,
    marginTop: HP('4'),
  },

  upButtonCon: {
    borderColor: colors.b1,
    padding: 6,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  smText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxxxtiny,
    color: colors.b1,
    marginLeft: 10,
  },
  smIcon: {
    height: 11,
    width: 11,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
  },
});

export default styles;
