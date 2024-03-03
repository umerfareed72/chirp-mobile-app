import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {appFonts, colors, size} from '../../utilities';

export const ScrollTabCard = ({setActiveTab, activeTab, data, tab}) => {
  return (
    <>
      <TouchableOpacity
        style={activeTab === tab ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab(tab)}
        underlayColor="#fff">
        <Text style={activeTab === tab ? styles.activeText : styles.text}>
          {tab}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  activeTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.theme_color,
    marginHorizontal: 15,
  },
  text: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xxlarge,

    color: colors.g16,
  },
  activeText: {
    fontFamily: appFonts.poppinLight,
    fontSize: size.xxlarge,
    color: colors.theme_color,
  },
  tabContent: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
