import React, {useRef, useState} from 'react';
import {Alert, FlatList, Image, ScrollView, View} from 'react-native';
import {
  CommentModal,
  DualButtonCard,
  GroupProfileCard,
  ImageHeader,
  MenuModal,
  PhotosCard,
  ProfileSec3,
  Section3,
  SlideButtonCard,
} from '../../../../components';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  post_menu_list,
  size,
  spacing,
  WP,
  onPressShare,
} from '../../../../utilities';
import styles from './styles';

const FriendDetails = ({navigation}) => {
  const modalRef = useRef(null);
  const commentRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Posts');

  const data = [
    {id: 0, text: 'Posts'},
    {id: 1, text: 'Photos'},
    {id: 2, text: 'Videos'},
  ];

  return (
    <View style={commonstyles.main}>
      <ImageHeader />
      <ScrollView style={commonstyles.contentContainer(colors.g6)}>
        <Image source={appImages.profileImage} style={[styles.profStyle]} />
        <GroupProfileCard title={'Friend Name'} sub2={'Software Architect'} />

        <DualButtonCard
          onPress1={() => {
            Alert.alert('Coming Soon');
          }}
          onPress2={() => {
            Alert.alert('Coming Soon');
          }}
          firstText={'Friends'}
          secondText={'Message'}
          vectIcoName={'user-check'}
          vectIcoColor={colors.theme_color}
          src2={appIcons.messengerWhiteIcon}
        />

        <View style={styles.slideButtonCon}>
          <SlideButtonCard
            activeTab={activeTab}
            setActiveTab={item => setActiveTab(item)}
            data={data}
          />
        </View>

        {/* Photos */}
        {activeTab == 'Photos' ? (
          <>
            <View style={{marginVertical: 10}}>
              <FlatList
                data={imgList}
                renderItem={({item}) => {
                  return (
                    <View style={spacing.m1}>
                      <PhotosCard
                        imageUri={item?.name}
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

        {/* Posts */}
        {activeTab == 'Posts' ? (
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
            <ProfileSec3
              onPressAll={() => {
                navigation?.navigate('MediaItemScreen');
              }}
              cardTitle={'Photos'}
              simplePics
            />
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

export default FriendDetails;
