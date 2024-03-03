import {StyleSheet, useColorScheme} from 'react-native';
import {appFonts, colors, size, WP} from '../../../../utilities';
// import {appFonts, colors, size} from '../../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    marginTop: 20,
  },
  infoWrapper: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaWrapper: {
    flexDirection: 'row',
  },
  areaOption: {
    marginRight: 5,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderColor: colors.g5,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.w1,
  },
  avatar: {
    marginRight: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 14,
    fontFamily: appFonts.poppinMedium,
    color: colors.b1,
  },
  dropDownText: {
    fontSize: size.tiny,
    fontFamily: appFonts.poppinRegular,
    color: colors.b1,
  },

  postText: {
    fontSize: size.tiny,
    textAlign: 'left',
    color: colors.b1,
    fontFamily: appFonts.poppinRegular,
    paddingLeft: 20,
  },

  textInputArea: (bgColor, height) => {
    return {
      backgroundColor: bgColor,
      // height: height,
      marginHorizontal: -20,
    };
  },
  imageStyle: {width: WP('100%'), height: 100},
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.g18,
  },
});

export default styles;
