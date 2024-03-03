import React from 'react';
import {FlatList, Image, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {appFonts, appImages, colors, size, spacing} from '../../../utilities';
import {InvitationCard} from '../../Cards/InvitationCard';
import {OverlapAvatarCard} from '../../Cards/OverlapAvatarCard';
import PostProfileCard from '../../Cards/PostProfileCard';
import {ScreenHeader} from '../../Headers/ScreenHeader';

export const ProfileSec1 = ({title, my}) => {
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <Image source={appImages.s1} style={styles.imgStyle} />
      <View style={styles.innerCon}>
        <View style={styles.proCard}>
          <Image source={appImages.profileImage} style={styles.image} />
          <View style={styles.descCon}>
            <Text style={styles.titleText}>Victoria Malik</Text>
            <Text style={styles.subTitleText}>4k Friends</Text>
          </View>
        </View>
        <View style={styles.avatarCon}>
          <OverlapAvatarCard
            users_lists={[
              {profile_image: appImages.n1},
              {profile_image: appImages.n1},
              {profile_image: appImages.n1},
              {profile_image: appImages.n1},
            ]}
            imageHeight={32}
            imageWidth={32}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '35%',
    backgroundColor: colors.w1,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
  },
  imgStyle: {
    height: '70%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  innerCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  proCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  image: {
    height: 49,
    width: 49,
    borderRadius: 50,
  },

  titleText: {
    fontFamily: appFonts.poppinBold,
    fontSize: size.small,
    color: colors.b1,
  },
  subTitleText: {
    fontFamily: appFonts.poppinBold,
    fontSize: size.xxsmall,
    color: colors.theme_color,
  },

  descCon: {
    flexDirection: 'column',
    marginLeft: 5,
    justifyContent: 'center',
  },
  avatarCon: {
    marginRight: 10,
  },
});
