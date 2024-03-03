import {StyleSheet} from 'react-native';
import {appImages, colors, size, appFonts} from '../../../../utilities';
const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 20,
  },

  imageUri: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textStyle: {
    fontSize: size.small,
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 500,
    marginLeft: 15,
  },
  buttonStyle: {alignItems: 'center', marginTop: 30},

  item: {
    borderWidth: 0,
    borderRadius: 26,
    // borderColor: '#333',
    backgroundColor: 'rgba(133, 15, 15, 0.15)',
    // width: 100,
  },
  label: {
    color: colors.red2,
    fontSize: size.tiny,
    fontFamily: appFonts.poppinRegular,
    fontWeight: 400,
    height: 15,
  },
  itemSelected: {
    backgroundColor: colors.red2,
  },
  labelSelected: {
    color: '#FFF',
  },
});

export default styles;
