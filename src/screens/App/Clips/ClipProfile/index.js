import React from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {AppButton, AppHeader, PhotosCard} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const ClipProfile = ({navigation, route}) => {
  const isMyClip = route?.params?.isMyClip || false;

  return (
    <View style={commonstyles.main}>
      <AppHeader title={`John's Clips`} backIcon />

      <View
        style={[commonstyles.contentContainer(colors.g18), styles.mainSection]}>
        <Image style={styles.imageUri} source={appImages.profileImage} />

        <View style={styles.valueMain}>
          <View>
            <Text style={styles.valueText}>{210}</Text>
            <Text style={styles.titleText}>{'Clips'}</Text>
          </View>

          <View>
            <Text style={styles.valueText}>{'1.5k'}</Text>
            <Text style={styles.titleText}>{'Followers'}</Text>
          </View>
        </View>

        {isMyClip && (
          <View style={{flexDirection: 'row'}}>
            <View style={spacing.m3}>
              {/* <AppButton
                width={150}
                height={50}
                onPress={() => {}}
                title={'View Saved'}
                // marginVertical={20}
                borderRadius={5}
              /> */}
            </View>
            <View style={spacing.m2}>
              <AppButton
                width={150}
                height={50}
                title={'Main Profile'}
                // marginVertical={20}
                borderRadius={5}
                onPress={() => {
                  navigation?.navigate('HomeProfile', {screen: 'Profile'});
                }}
              />
            </View>
          </View>
        )}

        <FlatList
          data={imgList}
          renderItem={({item}) => {
            return (
              <View style={spacing.m2}>
                <PhotosCard
                  imageUri={item?.name}
                  height={170}
                  width={WP('27.5%')}
                  isBottomVideoIcon
                  disabled={false}
                  onPress={() => {
                    navigation?.navigate('VideoScreen');
                  }}
                />
              </View>
            );
          }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {isMyClip && (
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('CreateClip');
            }}>
            <Image
              style={styles.floatingButtonImage}
              source={appIcons.addColorIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ClipProfile;
