import React from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  imgList,
  size,
  spacing,
  WP,
} from '../../../utilities';
import {AppButton} from '../../Buttons/AppButton';
import {PhotosCard} from '../../Cards/PhotoCard';
import {StoryCardBg} from '../../Cards/StoryCardBg';

export const ProfileSec3 = ({
  title,
  my,
  createPics,
  simplePics,
  moreButton,
  cardTitle,
  titleFont,
  titleSize,
  titleColor,
  onPressAll,
}) => {
  return (
    <View style={[styles.container, {marginVertical: my || 10}]}>
      <View style={styles.titleHead}>
        <Text
          style={{
            fontFamily: titleFont || appFonts.poppinRegular,
            fontSize: titleSize || size.normal,
            color: titleColor || colors.b4,
          }}>
          {cardTitle || ''}
        </Text>
        <TouchableOpacity onPress={onPressAll}>
          <Text style={styles.title2}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.imgCon}>
          {simplePics ? (
            <FlatList
              data={imgList}
              renderItem={({item}) => {
                return (
                  <View style={styles.innerCon}>
                    <PhotosCard
                      imageUri={item?.name}
                      height={120}
                      width={WP('37')}
                      borderRadius={10}
                    />
                  </View>
                );
              }}
              numColumns={2}
            />
          ) : null}

          {createPics ? (
            <View style={styles.storyCon}>
              <FlatList
                data={[
                  {icon: null},
                  {icon: appImages.s1, profileImage: appImages.profileImage},
                  {icon: appImages.s2, profileImage: appImages.profileImage},
                  {icon: appImages.s3, profileImage: appImages.profileImage},
                ]}
                renderItem={({item}) => {
                  return (
                    <View style={styles.storyImg}>
                      <StoryCardBg
                        onPressAdd={() => {}}
                        imgUri={item?.icon}
                        profileImg={item?.profileImage}
                        removeText
                      />
                    </View>
                  );
                }}
                numColumns={2}
                keyExtractor={(item, index) => index?.toString()}
              />
            </View>
          ) : null}
        </View>
        {moreButton ? (
          <AppButton
            titleColor={colors.g4}
            height={50}
            leftIcon={appIcons.shareArrowIcon}
            bgColor={colors.w1}
            title={'More'}
            shadowColor={colors.g4}
            hlefIcoH={17}
            hlefIcoW={17}
          />
        ) : null}
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
    // alignItems: 'center',
  },

  title2: {
    fontFamily: appFonts.poppinBold,
    fontSize: size.xsmall,
    color: colors.theme_color,
  },
  titleHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imgCon: {
    // alignItems: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  innerCon: {
    margin: 5,
  },
  storyImg: {
    width: '45%',
    margin: 5,
  },
  storyCon: {
    flex: 1,
  },
});
