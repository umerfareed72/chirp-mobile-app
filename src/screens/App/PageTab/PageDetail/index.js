import React, {useRef, useState} from 'react';
import {Alert, FlatList, ScrollView, View} from 'react-native';
import {
  AppBox,
  ChatInput,
  CommentModal,
  CommentsCard,
  ImageHeader,
  MenuModal,
  PageProfileCard,
  PageSection1,
  PageSection2,
  PhotosCard,
  ProfileSec3,
  ScreenHeader,
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
  onPressShare,
  post_menu_list,
  size,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const PageDetail = ({navigation}) => {
  const modalRef = useRef(null);
  const commentRef = useRef(null);

  const [activeTab, setActiveTab] = useState('Home');
  const data = [
    {id: 0, text: 'Home'},
    {id: 1, text: 'Posts'},
    {id: 2, text: 'Photos'},
    {id: 3, text: 'Videos'},
  ];
  return (
    <View style={commonstyles.main}>
      <ImageHeader
        onPressShare={onPressShare}
        onPressSearch={() => {
          navigation?.navigate('Search', {});
        }}
      />
      <View style={commonstyles.contentContainer(colors.g6)}>
        <PageProfileCard
          title={'Page Name'}
          sub1={'Public'}
          sub2={'49k People Like This'}
        />

        <View style={styles.itemCon}>
          <AppBox
            height={45}
            width={45}
            borderRadius={45}
            icon={appIcons.editIcon}
            iconStyle={styles.editIcon}
            title={'Post'}
            titleStyle={styles.titleStyle}
            onPress={() => {
              // navigation?.navigate('CreatePost', {
              //   title: 'Post in Page',
              //   type: 'page',
              // });

              navigation?.navigate('PagePost', {
                screen: 'CreatePost',
                params: {type: 'page'},
              });
            }}
          />

          <AppBox
            height={45}
            width={45}
            borderRadius={45}
            icon={appIcons.showIcon}
            iconStyle={styles.editIcon}
            title={'View As'}
            titleStyle={styles.titleStyle}
            onPress={() => {
              navigation?.navigate('PageView');
            }}
          />
          <AppBox
            height={45}
            width={45}
            borderRadius={45}
            icon={appIcons.pencilIcon}
            iconStyle={styles.editIcon1}
            title={'Edit Page'}
            titleStyle={styles.titleStyle}
            onPress={() => {
              navigation?.navigate('EditPage');
            }}
          />
        </View>
        <View style={spacing.pb4}>
          <SlideButtonCard
            activeTab={activeTab}
            setActiveTab={item => setActiveTab(item)}
            data={data}
          />
        </View>
        <ScrollView>
          {/* Home */}
          {activeTab == 'Home' ? (
            <>
              <View style={styles.sectionCon}>
                <PageSection1
                  list={[
                    {id: 0, title: 'info@gmail.com', icon: appIcons.email},
                    {
                      id: 1,
                      title: 'Send Message',
                      icon: appIcons.messengerIcon,
                    },
                    {
                      id: 2,
                      title: 'https://www.vitazam.com/',
                      icon: appIcons.worldIcon,
                    },
                  ]}
                  desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`}
                />
              </View>
              <ScreenHeader
                marginTop={10}
                marginBottom={5}
                title={'Related Pages'}
              />
              <FlatList
                data={imgList}
                renderItem={({item}) => {
                  return (
                    <View>
                      <PageSection2 icon={item?.name} />
                    </View>
                  );
                }}
                keyExtractor={(item, index) => item?.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
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
              <Section3
                onPressVideo={() => {
                  navigation?.navigate('VideoScreen');
                }}
                onPressDot={() => {
                  modalRef?.current?.open();
                }}
                isVideo={true}
                onPressCross={() => {}}
              />
              <Section3
                onPressVideo={() => {
                  navigation?.navigate('VideoScreen');
                }}
                onPressDot={() => {
                  modalRef?.current?.open();
                }}
                onPressCross={() => {
                  Alert.alert('Coming Soon');
                }}
              />
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({item}) => {
                  return (
                    <View>
                      <CommentsCard />
                    </View>
                  );
                }}
                ListFooterComponent={() => {
                  return (
                    <View>
                      <ChatInput width={'85%'} inputWidth={'85%'} />
                    </View>
                  );
                }}
                keyExtractor={(item, index) => item?.toString()}
                showsVerticalScrollIndicator={false}
              />
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
                onPressCross={() => {
                  Alert.alert('Coming Soon');
                }}
                isPhoto={true}
              />
              <Section3
                onPressVideo={() => {
                  navigation?.navigate('VideoScreen');
                }}
                onPressDot={() => {
                  modalRef?.current?.open();
                }}
                isVideo={true}
                onPressCross={() => {
                  Alert.alert('Coming Soon');
                }}
              />
              <Section3
                onPressVideo={() => {
                  navigation?.navigate('VideoScreen');
                }}
                onPressDot={() => {
                  modalRef?.current?.open();
                }}
                onPressCross={() => {
                  Alert.alert('Coming Soon');
                }}
              />
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({item}) => {
                  return (
                    <View>
                      <CommentsCard />
                    </View>
                  );
                }}
                ListFooterComponent={() => {
                  return (
                    <View>
                      <ChatInput width={'85%'} inputWidth={'85%'} />
                    </View>
                  );
                }}
                keyExtractor={(item, index) => item?.toString()}
                showsVerticalScrollIndicator={false}
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

              <Section3
                onPressVideo={() => {
                  navigation?.navigate('VideoScreen');
                }}
                onPressDot={() => {
                  modalRef?.current?.open();
                }}
                isVideo={true}
                onPressCross={() => {
                  Alert.alert('Coming Soon');
                }}
              />
            </>
          ) : null}

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
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </>
          ) : null}

          {/* <Section2
            opnePressCamera={openDeviceCamra}
            onPressGallery={openDeviceGallery}
            onPressVideo={openDeviceVideo}
            onPress={() => {
              navigation?.navigate('CreatePost');
            }}
          /> */}

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

export default PageDetail;
