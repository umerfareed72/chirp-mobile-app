import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {appFonts, appImages, colors, imgList, size} from '../../../utilities';
import {ProCard} from '../../Cards/ProCard';

export const ProfileSec4 = ({title, my, cardTitle}) => {
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <Text style={styles.titleText}>{cardTitle}</Text>
      <View style={styles.imgCon}>
        <FlatList
          data={imgList}
          renderItem={({item}) => {
            return (
              <View style={styles.innerCon}>
                <ProCard
                  icon={item?.name}
                  title={'Victoria Malik'}
                  desc={'256 Mutual Friends'}
                />
              </View>
            );
          }}
          numColumns={2}
        />
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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  titleText: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.xlarge,
    color: colors.theme_color,
  },
  descText: {
    fontFamily: appFonts.poppinSemiBold,
    fontSize: size.normal,
    color: colors.b1,
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
  innerCon: {
    margin: 6,
    flexDirection: 'column',
    // marginLeft: 10,
    justifyContent: 'center',
  },
});
