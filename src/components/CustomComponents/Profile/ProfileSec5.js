import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';

import {
  appFonts,
  appIcons,
  appImages,
  colors,
  size,
  spacing,
} from '../../../utilities';
import {InvitationCard} from '../../Cards/InvitationCard';
import {OverlapAvatarCard} from '../../Cards/OverlapAvatarCard';
import PostProfileCard from '../../Cards/PostProfileCard';
import {ProCard} from '../../Cards/ProCard';
import {ScreenHeader} from '../../Headers/ScreenHeader';

export const ProfileSec5 = ({my, cardTitle, data, seeText}) => {
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <Text style={styles.titleText}>{cardTitle}</Text>
      <View style={{}}>
        {data?.map(item => (
          <TouchableOpacity>
            <Text style={styles.text}>{item?.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {seeText ? (
        <TouchableOpacity>
          <Text style={styles.seeText}>See all</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 210,
    backgroundColor: colors.w1,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },

  titleText: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.xlarge,
    color: colors.g4,
  },
  text: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xsmall,
    color: colors.g4,
    marginVertical: 5,
  },
  seeText: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xxsmall,
    color: colors.theme_color,
  },
});
