import {StyleSheet} from 'react-native';
import {colors, appFonts, WP, HP} from '../../../../utilities';

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
    paddingTop: WP('10'),
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
});

export default styles;
