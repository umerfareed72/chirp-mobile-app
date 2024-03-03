import React, {useRef, useState} from 'react';
import {Alert, FlatList, ScrollView, View} from 'react-native';

import {
  CommentModal,
  DualButtonCard,
  GroupProfileCard,
  GroupSec1,
  ImageHeader,
  MenuModal,
  OverlapAvatarCard,
  PhotosCard,
  ProfileSec3,
  ScreenHeader,
  Section2,
  Section3,
  SlideButtonCard,
} from '../../../../components';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  HP,
  imgList,
  onPressShare,
  openDeviceCamra,
  openDeviceGallery,
  openDeviceVideo,
  post_menu_list,
  size,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const GroupDetails = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Featured');
  const data = [
    {id: 0, text: 'Featured'},
    {id: 1, text: 'Topics'},
    {id: 2, text: 'Photos'},
    {id: 3, text: 'Videos'},
  ];
  const modalRef = useRef(null);
  const commentRef = useRef(null);

  const openGallery = async () => {
    const res = await openDeviceGallery(true);
    if (res) {
      navigation?.navigate('GroupPost', {
        screen: 'CreatePost',
        params: {type: 'group'},
      });
    }
  };

  const openCamera = async () => {
    const res = await openDeviceCamra();
    if (res) {
      const images = [];
      images.push(res);
      navigation?.navigate('GroupPost', {
        screen: 'CreatePost',
        params: {type: 'group'},
      });
    }
  };

  return (
    <View style={commonstyles.main}>
      <ImageHeader
        onPressShare={onPressShare}
        onPressSearch={() => {
          navigation?.navigate('Search');
        }}
      />
      <ScrollView style={commonstyles.contentContainer(colors.g6)}>
        <GroupProfileCard
          title={'Group Name'}
          sub1={'Public Group'}
          sub2={'102k members'}
        />
        <OverlapAvatarCard
          users_lists={imgList}
          imageHeight={25}
          imageWidth={25}
        />
        <DualButtonCard
          firstText={'Joined'}
          secondText={'Invite'}
          src1={appIcons.teamColorIcon}
          src2={appIcons.individualPlusIcon}
          mV={HP('2')}
          onPress2={() => {
            navigation?.navigate('InviteFriend');
          }}
        />

        <SlideButtonCard
          activeTab={activeTab}
          setActiveTab={item => setActiveTab(item)}
          data={data}
        />
        {/* Featured */}
        {activeTab == 'Featured' ? (
          <>
            <View style={styles.sectionCon}>
              <Section2
                opnePressCamera={openCamera}
                onPressGallery={openGallery}
                onPressVideo={openDeviceVideo}
                onPress={() => {
                  navigation?.navigate('GroupPost', {
                    screen: 'CreatePost',
                    params: {type: 'group'},
                  });
                }}
              />
            </View>
            <ScreenHeader
              marginTop={10}
              marginBottom={5}
              title={'Most Recent'}
            />

            <Section3
              onPressLike={() => {}}
              onPressComment={() => {
                commentRef?.current?.open();
              }}
              onPressShare={() => {
                onPressShare();
              }}
              onPressPic={() => {
                navigation?.navigate('MediaItemScreen');
              }}
              onPressDot={() => {
                modalRef?.current?.open();
              }}
              onPressCross={() => {
                Alert.alert('Coming Soon');
              }}
              isPhoto={true}
            />
            <ScreenHeader marginTop={10} marginBottom={5} title={'All'} />
            <Section3
              onPressLike={() => {}}
              onPressComment={() => {
                commentRef?.current?.open();
              }}
              onPressShare={() => {
                onPressShare();
              }}
              onPressPic={() => {
                navigation?.navigate('MediaItemScreen');
              }}
              onPressDot={() => {
                modalRef?.current?.open();
              }}
              onPressCross={() => {
                Alert.alert('Coming Soon');
              }}
              isPhoto={true}
            />
            <GroupSec1 title={'Shahid help your friends to join this group'} />
          </>
        ) : null}

        {/* Photos */}
        {activeTab == 'Photos' ? (
          <>
            <View style={{marginVertical: 10}}>
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                renderItem={() => {
                  return (
                    <View style={spacing.m1}>
                      <PhotosCard
                        icon={appImages.n1}
                        height={110}
                        width={WP('28.5')}
                        borderRadius={10}
                      />
                    </View>
                  );
                }}
                numColumns={3}
              />
            </View>
          </>
        ) : null}

        {/* Videos */}
        {activeTab == 'Videos' ? (
          <>
            <ProfileSec3
              titleFont={appFonts.poppinSemiBold}
              titleSize={size.large}
              titleColor={colors.theme_color}
              cardTitle={'Videos'}
              createPics
            />
          </>
        ) : null}

        {/* Topics */}
        {activeTab == 'Topics' ? (
          <>
            <Section3
              onPressLike={() => {}}
              onPressComment={() => {
                commentRef?.current?.open();
              }}
              onPressShare={() => {
                onPressShare();
              }}
              onPressPic={() => {
                navigation?.navigate('MediaItemScreen');
              }}
              onPressDot={() => {
                modalRef?.current?.open();
              }}
              onPressCross={() => {}}
              isPhoto={true}
            />
          </>
        ) : null}

        <CommentModal
          onPress={() => {
            commentRef?.current?.close();
          }}
          show={commentRef}
          data={post_menu_list}
          height={'90%'}
        />
        <MenuModal
          onPress={() => {
            modalRef?.current?.close();
          }}
          show={modalRef}
          data={post_menu_list}
          height={'40%'}
        />
      </ScrollView>
    </View>
  );
};

export default GroupDetails;
