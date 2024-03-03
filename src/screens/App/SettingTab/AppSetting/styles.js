import {StyleSheet} from 'react-native';
import {colors, WP} from '../../../../utilities';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g6,
  },
  imageConatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  policyImageStyle: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
  TermsImageStyle: {
    height: 20,
    width: 16,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
  faqsImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },
  logoutImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: colors.theme_color,
  },

  section2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  imgCon: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g12,
    borderColor: colors.g12,
    marginBottom: 20,
  },
  imgStyle: {
    height: '95%',
    width: '95%',
    borderRadius: 100,
  },
  leftCon: {
    width: '10%',
  },
});

export default styles;
