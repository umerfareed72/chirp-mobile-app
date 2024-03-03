import React, {useRef, useState} from 'react';
import {Alert, ScrollView, Share, View} from 'react-native';
import {
  CommentModal,
  HomeHeader,
  MenuModal,
  PicturePreviewModal,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  StorySlider,
} from '../../../../components';
import {
  appImages,
  colors,
  commonstyles,
  friendList,
  openDeviceCamra,
  openDeviceGallery,
  openDeviceVideo,
  post_menu_list,
  recentList,
} from '../../../../utilities';

const HomeScreen = ({navigation, route}) => {
  let data = [
    {
      user_id: 1,
      user_image:
        'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
      user_name: 'Ahmet Çağlar Durmuş',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
      ],
    },
    {
      user_id: 1,
      user_image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      user_name: 'Test User',
      stories: [
        {
          story_id: 2,
          story_image:
            'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
  ];

  const modalRef = useRef(null);
  const commentRef = useRef(null);
  const [openStory, setopenStory] = useState(false);
  const [selctedStories, setSelctedStories] = useState([]);
  const [showPictureModal, setShowPictureModal] = useState(false);
  const [selectImage, setSelectedImage] = useState(null);

  const onPressShare = async () => {
    const result = await Share.share({
      title: 'Chrip',
      message: `Share Post Now`,
    });
  };

  const openGallery = async () => {
    const res = await openDeviceGallery(true);
    if (res) {
      navigation?.navigate('CreatePost', {
        type: 'post',
        selectedImage: res,
      });
    }
  };

  const openCamera = async () => {
    const res = await openDeviceCamra();
    if (res) {
      const images = [];
      images.push(res);
      navigation?.navigate('CreatePost', {
        type: 'post',
        selectedImage: images,
      });
    }
  };

  return (
    <View style={commonstyles.main}>
      <HomeHeader
        onPrSearchIco={() => {
          navigation?.navigate('Search', {
            list: friendList,
            recentList: recentList,
          });
        }}
        onPressNotiIcon={() => {
          navigation?.navigate('NotificationStack', {
            screen: 'Notification',
          });
        }}
        onPressChat={() => {
          Alert.alert('Coming Soon');
        }}
      />
      <View style={commonstyles.contentContainer(colors.g6)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section1
            data={data}
            onPress={res => {
              setopenStory(true);
              setSelctedStories([res]);
            }}
            onPressCreate={() => {
              navigation?.navigate('Stories', {
                screen: 'CreateStory',
              });
            }}
          />
          <Section2
            opnePressCamera={openCamera}
            onPressGallery={openGallery}
            onPressVideo={openDeviceVideo}
            onPress={() => {
              navigation?.navigate('CreatePost', {
                type: 'post',
              });
            }}
          />
          <Section3
            onPressLike={() => {}}
            onPressComment={() => {
              commentRef?.current?.open();
            }}
            onPressShare={() => {
              onPressShare();
            }}
            onPressPic={item => {
              // console.log('item12345', item);

              setSelectedImage(item);
              setShowPictureModal(true);
              // navigation?.navigate('MediaItemScreen');
            }}
            onPressDot={() => {
              modalRef?.current?.open();
            }}
            onPressCross={() => {
              Alert.alert('Coming Soon');
            }}
            isPhoto={true}
          />

          <Section4
            onPressDot={() => {
              modalRef?.current?.open();
            }}
            onPressCard={() => {
              // navigation.navigate('Clip', {
              //   screen: 'ClipProfile',
              //   params: {isMyClip: false},
              // });

              navigation?.navigate('VideoScreen');
            }}
            onPressClip={() => {
              navigation.navigate('Clip', {
                screen: 'ClipProfile',
                params: {isMyClip: true},
              });
            }}
            onPressCreate={() => {
              navigation.navigate('Clip', {
                screen: 'CreateClip',
                params: {isMyClip: true},
              });
            }}
          />
          <Section3
            onPressVideo={() => {
              navigation?.navigate('VideoScreen');
            }}
            onPressDot={() => {
              modalRef?.current?.open();
            }}
            onPressShare={() => {
              onPressShare();
            }}
            isVideo={true}
            onPressCross={() => {
              Alert.alert('Coming Soon');
            }}
            onPressComment={() => {
              commentRef?.current?.open();
            }}
          />
          <Section5
            onPressThreeDot={() => {
              modalRef?.current?.open();
            }}
            onPressCross={() => {
              Alert.alert('Coming Soon');
            }}
          />
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

      <StorySlider
        selectedData={selctedStories || []}
        setIsModalOpen={() => {
          setopenStory(false);
        }}
        isModalOpen={openStory}
      />

      <PicturePreviewModal
        show={showPictureModal}
        onPressHide={() => {
          setShowPictureModal(false);
        }}
        title={''}
        imageUri={selectImage || appImages.n1}
      />
    </View>
  );
};

export default HomeScreen;
