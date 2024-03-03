import React, {useState, useRef} from 'react';
import {ScrollView, View, FlatList, Text, Share, Alert} from 'react-native';
import {
  AppHeader,
  CommentModal,
  DualButtonCard,
  HomeHeader,
  MenuModal,
  ProfileSec1,
  ProfileSec2,
  ProfileSec3,
  ProfileSec4,
  ProfileSec5,
  ScrollTabCard,
  Section3,
} from '../../../../components';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  HP,
  post_menu_list,
  size,
} from '../../../../utilities';
import styles from './styles';

const Profile = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Posts');
  const modalRef = useRef(null);
  const commentRef = useRef(null);

  const onPressShare = async () => {
    const result = await Share.share({
      title: 'Chrip',
      message: `Share Post Now`,
    });
  };

  const tabs = [
    {name: 'Posts'},
    {name: 'About'},
    {name: 'My Friends'},
    {name: 'Photos'},
    {name: 'Videos'},
  ];

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Profile'} />

      <View style={commonstyles.contentContainer(colors.g6)}>
        <ProfileSec1 my={20} />
        <DualButtonCard
          iconHeight={22}
          iconWidth={22}
          src1={appIcons.plus}
          src2={appIcons.pencilIcon}
          buttonHeight={50}
          btnT={appFonts.poppinBold}
          btnTS={size.normal}
          firstText={'Add Story'}
          secondText={'Edit Profile'}
          mV={HP('2')}
          onPress1={() => {
            navigation.navigate('StoriesStack', {
              screen: 'CreateStory',
            });
          }}
          onPress2={() => {
            navigation?.navigate('EditProfile');
          }}
        />

        <View style={styles.tabCon}>
          <FlatList
            horizontal={true}
            data={tabs}
            renderItem={({item}) => {
              return (
                <ScrollTabCard
                  activeTab={activeTab}
                  setActiveTab={item => {
                    setActiveTab(item);
                  }}
                  tab={item.name}
                />
              );
            }}
            keyExtractor={(item, index) => index?.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ScrollView>
          {/* Posts */}
          {activeTab == 'Posts' ? (
            <>
              <ProfileSec2 />

              <ProfileSec3
                onPressAll={() => {
                  navigation?.navigate('MediaItemScreen');
                }}
                cardTitle={'Photos'}
                simplePics
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
                onPressCross={() => {}}
                isPhoto={true}
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
                onPressCross={() => {}}
                isPhoto={true}
              />
            </>
          ) : null}

          {/* About */}
          {activeTab == 'About' ? (
            <>
              <ProfileSec5
                cardTitle={'About'}
                data={[
                  {title: 'Overview'},
                  {title: 'Work and Education'},
                  {title: 'Places Lived'},
                  {title: 'Details about you'},
                ]}
              />
              <ProfileSec4 cardTitle={'Friends'} />
            </>
          ) : null}

          {/* My Friends */}
          {activeTab == 'My Friends' ? (
            <>
              <ProfileSec4 cardTitle={'Friends'} />
              <ProfileSec4 cardTitle={'Friends Requests'} />
              <ProfileSec4 cardTitle={'Suggestions'} />
            </>
          ) : null}

          {/* Photos */}
          {activeTab == 'Photos' ? (
            <>
              <ProfileSec5
                cardTitle={'About'}
                data={[
                  {title: 'Photos of you'},
                  {title: 'Profile Photos'},
                  {title: 'Cover Photos'},
                  {title: 'Details about you'},
                ]}
                seeText
              />
              <ProfileSec3
                titleFont={appFonts.poppinSemiBold}
                titleSize={size.large}
                titleColor={colors.theme_color}
                cardTitle={'Photos'}
                createPics
              />

              <ProfileSec3
                cardTitle={'Trending Photos'}
                createPics
                moreButton
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
    </View>
  );
};

export default Profile;
