import {StyleSheet} from 'react-native';
import {colors, appFonts, WP, HP, size} from '../../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.g6,
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
  },

  heading: {
    fontFamily: appFonts.poppinSemiBold,
    color: colors.black,
  },
  lineRow: {
    marginHorizontal: 5,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  cardContainer: {
    // marginVertical: 10,
    // width: '100%',
  },

  contentCon: {
    width: '100%',
    alignItems: 'center',
    paddingTop: WP('5'),
    paddingBottom: WP('5'),
  },
  inputCon: {
    width: '100%',
  },
  contentContainer: {
    backgroundColor: colors.g6,
    paddingHorizontal: 25,
    flex: 1,
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
  upCon: {
    backgroundColor: colors.g9,
    height: 136,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  upButtonCon: {
    borderColor: colors.theme_color,
    height: 30,
    width: 140,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subText: {
    marginVertical: 5,
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xsmall,
    color: colors.theme_color,
  },
});

export default styles;
