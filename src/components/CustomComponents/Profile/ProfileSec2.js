import React from 'react';
import {FlatList, Image, Text} from 'react-native';
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
import {ScreenHeader} from '../../Headers/ScreenHeader';

export const ProfileSec2 = ({title, my}) => {
  const data = [
    {
      icon: appIcons.shieldColorIcon,
      title: 'Private',
      desc: 'Whats up, how are you?',
    },
    {
      icon: appIcons.visibleIcon,
      title: 'Visible',
      desc: 'Anyone can find you',
    },
    {
      icon: appIcons.locationIcon,
      title: 'Alaska, USA',
    },
    {
      icon: appIcons.heartIcon,
      title: 'Single',
    },
  ];
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <Text style={styles.titleText}>About</Text>
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
        dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
        mollis pharetra. Proin blandit ac massa sed rhoncus.
      </Text>
      <View style={styles.infoCon}>
        {data.map(item => (
          <View style={styles.cardCon}>
            <Image source={item?.icon} style={styles.image} />
            <View style={styles.innerCon}>
              <Text style={styles.title}>{item?.title}</Text>
              {item?.desc ? (
                <Text style={styles.subTitle}>{item?.desc}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 500,
    backgroundColor: colors.w1,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },

  titleText: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.xlarge,
    color: colors.b4,
  },
  descText: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.normal,
    color: colors.b1,
  },

  cardCon: {flexDirection: 'row', marginVertical: 10},
  image: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    // alignSelf: 'center',
  },
  innerCon: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxsmall,
    color: colors.b4,
  },
  subTitle: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.small,
    color: colors.b1,
  },
  infoCon: {
    marginVertical: 10,
  },
});
