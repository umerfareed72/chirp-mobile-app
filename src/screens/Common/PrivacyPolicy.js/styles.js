import {StyleSheet, Dimensions} from 'react-native';
import {appFonts, size} from '../../../utilities';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  textStyle: {
    marginVertical: 10,
    fontSize: size.tiny,
    fontFamily: appFonts.poppinRegular,
    lineHeight: 21,
  },

  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },
});

export default styles;
